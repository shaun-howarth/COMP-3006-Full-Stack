const express = require("express");
const app = express();
const server = app.listen(8080);

// ejs view engine configuration for express app
app.set("View engine", "ejs");

app.use(express.urlencoded({ extended: true}));

app.use("/assets", express.static("assets"));


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