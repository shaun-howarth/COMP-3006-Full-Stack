const express = require("express");
const app = express();
const server = app.listen(8080);
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

app.use(express.urlencoded({ extended: true}));

app.use("/assets", express.static("assets"));

// connection to mongo db for to-do-list CRUD functionality
// mongoose.set("useFindAndModify", false);

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connected to the database!");
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

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/sign-up', (req, res) => {
    res.render('sign-up.ejs');
});

// get method for to-do-list page
app.get('/to-do-list', (req, res) => {
    res.render('to-do-list.ejs');
});

// post method
app.post ('/',(req, res) => {
    console.log(req.body);
});