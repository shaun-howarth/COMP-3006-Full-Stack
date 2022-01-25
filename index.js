const express = require("express");
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");

// data models
const TodoTask = require("./models/TodoTask");


dotenv.config();

app.use(express.urlencoded({ extended: true}));

app.use("/assets", express.static("assets"));

// connection to mongo db for to-do-list CRUD functionality
// mongoose.set("useFindAndModify", false);

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connected to the database!");
    app.listen(3000, () => console.log("Server is running"));
    
});

// ejs view engine configuration for express app
app.set("View engine", "ejs");


// index get render page
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// get methods for rendering web pages (ejs files)
app.get('/help', (req, res) => {
    res.render('help.ejs');
});

// get method for to-do-list page
app.get('/to-do-list', (req, res) => {
    TodoTask.find ({}, (err , tasks) => {
        res.render('to-do-list.ejs', { todoTask: tasks});
    });
});

// post method
app.post ('/',async (req, res) => {
    const todoTask = new TodoTask({
        content: req.body.content,
    });

    try {
        await todoTask.save();
        res.redirect("/");
    }   catch (err) {
        res.redirect("/");
    }
});