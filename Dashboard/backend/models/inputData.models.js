import mongoose from "mongoose";


const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
  paymentMethod: { type: String, required: true }
});

const categorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: { type: [itemSchema], default: [] }
});


const monthlySchema = new mongoose.Schema({
  month: { type: String, required: true },
  totalBudget: { type: Number, required: true },
  expence: { type: [categorySchema], default: [] },
  createdAt: { type: Date, default: Date.now }
});

const InputDataSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  Monthly: { type: [monthlySchema], default: [] } 
});




const InputData = mongoose.model('InputData', InputDataSchema);
export default InputData;
