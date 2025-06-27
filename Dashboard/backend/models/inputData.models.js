const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inputDataSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const InputData = mongoose.model('InputData', inputDataSchema);

module.exports = InputData;