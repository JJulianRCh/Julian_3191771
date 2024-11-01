const express = require("express");
const path = require("path");
const pages = require("./routes/pages");

const app = express();
const port = 3007;

app.use(express.static("public"));
app.use("/", pages);

app.get("/", (req, res) => res.redirect("/principal"));
app.get("/", (req, res) => res.redirect("/generador"));
app.get("/", (req, res) => res.redirect("/calculadora"));

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})