const mongoose = require("mongoose");

const age_21Scheme = new mongoose.Schema({
    question: String,
    options: [String]
});

module.exports = mongoose.model("Qage21", age_21Scheme);
