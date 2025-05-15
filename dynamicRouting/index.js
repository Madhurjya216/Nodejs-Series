const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to the home page!");
})


app.get("/profile", (req, res) => {
    res.send("Welcome to the profile page!");
})

app.get("/profile/:username", (req, res) => {
    username = req.params.username
    const theme = req.query.theme || "light";
    res.send(`Welcome ${username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()} to your profile page!<br />
    Your theme is ${theme}.`);
})

app.listen(port);