const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const server = app.listen(3000);
const io = require('socket.io')(8080)

// data models
const TodoTask = require("./models/TodoTask");
const req = require("express/lib/request");
const res = require("express/lib/response");


// socket.io configuration: users array
const users = {}

io.on('connection', socket => {
    socket.on('new-user', username => {
        users[socket.id] = username
        socket.broadcast.emit('user-connected', username)
    })
    socket.on('send-chat-message' , message => {
        socket.broadcast.emit('chat-message', { message: message, username:
        users[socket.id]})
    })
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id]
    })
})

dotenv.config();
app.use(express.urlencoded({ extended: true}));
app.use("/assets", express.static("assets"));

// connection to mongo db for to-do-list CRUD functionality
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
   // message to see that env connection to DB can be made in the console
    console.log("Connected to the database!");
});

// ejs view engine configuration for express app
app.set("View engine", "ejs");


// index get render page
app.get('/', (req, res) => {
    res.render('index.ejs');
});

//app.get('/chat', (req, res) => {
   // res.render('chat.ejs');
//});

// help get render page
app.get('/help', (req, res) => {
    res.render('help.ejs');
});


// get method for to-do-list page rendering: CRUD CREATE DATA
app.get('/to-do-list', (req, res) => {
    TodoTask.find ({}, (err , tasks) => {
        res.render('to-do-list.ejs', { todoTask: tasks});
    });
});

// post method: CRUD READ DATA
app.post ('/',async (req, res) => {
    const todoTask = new TodoTask({
        content: req.body.content,
    });

    try {
        await todoTask.save();
        res.redirect("/to-do-list");
    }   catch (err) {
        res.redirect("/to-do-list");
    }
});

// update method: CRUD UPDATE DATA
app
.route("/edit/:id")
.get ((req, res) => {
    const id = req.params.id;
    TodoTask.find ({}, (err, tasks) => {
        res.render("to-do-list-edit.ejs", { todoTask: tasks, idTask: id });
    });
})
.post ((req, res) => {
    const id = req.params.id;

    TodoTask.findByIdAndUpdate(id, { content: req.body.content}, (err) => {
        if (err) return res.send(500, err);
        res.redirect("/to-do-list");
    });
});

// delete method: CRUDE DELETE DATA: remove task card
app.route("/delete/:id").get((req, res) => {
    const id = req.params.id;
    TodoTask.findByIdAndDelete(id, err => {
        if (err) return res.send(500, err);
        res.redirect("/to-do-list");
    });
});