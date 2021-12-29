const express = require("express");
const app = express();
const server = app.listen(8080);

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/help", (req, res) => {
    res.render("help");
});

app.get("/to-do-list", (req, res) => {
    res.render("to-do-list");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/sign-up", (req, res) => {
    res.render("sign-up");
});