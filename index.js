const express = require("express");
const app = express();
const server = app.listen(8080);


app.use("/assets", express.static("assets"));

app.set("View engine", "ejs");

app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/help", (req, res) => {
    res.render("help");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/sign-up", (req, res) => {
    res.render("sign-up");
});

app.get('/', (req, res) => {
    res.send('Hello Test!');
});

app.get("/to-do-list", (req, res) => {
    res.render("to-do-list");
});