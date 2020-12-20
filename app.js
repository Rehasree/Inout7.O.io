const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Q15 = require("./models/q15");
const Q18 = require("./models/q18");
const Q21 = require("./models/q21");

// mongoose setup
mongoose.connect("mongodb://localhost:27017/Project", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error!!!"));
db.once("open", () => {
    console.log("Connection opened!!!");
});

//Base route
app.get("/", (req, res) => {
    res.render("index");
});

//Index route
app.get("/index.html", (req, res) => {
    res.render("index");
});

//Age route
app.get("/age.html", (req, res) => {
    res.render("age");
})

// Show route for a particular age grp members
app.get("/questionspage.html", async (req, res) => {
    const { age } = req.query;
    const data1 = await Q15.find({});
    const data2 = await Q18.find({});
    const data3 = await Q21.find({});
    res.render("new", { age, data1, data2, data3 });
});

// Show route for the results 
app.post("/output.html", (req, res) => {
    const info = req.body;
    res.render("result", { info });
});

app.get("*", (req, res) => {
    res.send("404: An Error Occured")
})

app.listen(3000, () => {
    console.log("Server started...");
});
