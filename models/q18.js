const mongoose = require("mongoose");

const age_18Scheme = new mongoose.Schema({
    question: String,
    options: [String]
});

module.exports = mongoose.model("Qage18", age_18Scheme);
