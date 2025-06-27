const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoalsSchema = new mongoose.Schema({
    food: {
        type: Number,
    },
    housing: {
        type: Number
    },
    personal: {
        type: Number
    },
    saving: {
        type: Number
    },
    transportation: {
        type: Number
    }
});

const Goals = mongoose.model("Goals", GoalsSchema);

module.exports = Goals;