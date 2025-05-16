const express = require("express");
const app = express();
const port = 5000;
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
 
app.post("/submit", (req, res) => { 
  const { text, msg } = req.body;
  fs.readdir("./files", (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading directory");
    }
    const fileName = `./files/${text}.txt`;
    res.redirect("index", { fileName });
  });
});

app.listen(port);
