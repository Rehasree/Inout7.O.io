const mongoose = require("mongoose");

const age_15Scheme = new mongoose.Schema({
    question: {
        type: String,
    },
    options: {
        type: [String],
    }
});

module.exports = mongoose.model("Qage15", age_15Scheme);
