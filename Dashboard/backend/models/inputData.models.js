import mongoose from "mongoose";
import { Schema } from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
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

  }
});

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  items:{
    type :[itemSchema],
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
  }
});


 const InputData = mongoose.model('InputData', inputDataSchema);
export default InputData;
