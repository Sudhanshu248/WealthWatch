const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
    required: true
  },
  value: {
    type: Number,
    default: '',
    required: true
  },
  date: {
    type: Date,
    default: null 

  },
  paymentMethod: {
    type: String,
    default: ''
  }
});

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  items:{
    type :[itemSchema],
    default:[]
  } 
});

const inputDataSchema = new mongoose.Schema({
  totalBudget: {
    type: Number,
    required: true
  },
  expence:{
    type: [categorySchema], 
    default:[]
  }
});



const InputData = mongoose.model('InputData', inputDataSchema);

module.exports = InputData;