if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const mongoose = require("mongoose");
const data = require("./data");
const Q15 = require("../models/q15");
const Q18 = require("../models/q18");
const Q21 = require("../models/q21");

// mongoose setup
dbURL = process.env.DB_URL || "mongodb://localhost:27017/Project";

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error!!!"));
db.once("open", () => {
    console.log("Connection opened!!!");
})

const seedDB = async () => {
    await Q15.deleteMany({});
    await Q18.deleteMany({});
    await Q21.deleteMany({});
    const set1 = data.age_15.questions;
    for (let set of set1) {
        const s = new Q15({
            question: set.question,
            options: set.opts
        })
        await s.save();
    }
    const set2 = data.age_18.questions;
    for (let set of set2) {
        const s = new Q18({
            question: set.question,
            options: set.opts
        })
        await s.save();
    }
    const set3 = data.age_21.questions;
    for (let set of set3) {
        const s = new Q21({
            question: set.question,
            options: set.opts
        })
        await s.save();
    }
}

seedDB()
    .then(() => {
        mongoose.connection.close();
    })
