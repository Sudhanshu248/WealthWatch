import mongoose from "mongoose";
import { Schema } from "mongoose";

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
  userId:{
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
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
export default InputData;
