import { CurrExpence } from "../../Frontend/src/Components/data/CurrExp.js";
import InputData from "../models/inputData.models.js";
import mongoose from "mongoose";

// const DB_CONNECT = process.env.DB_CONNECT;

async function main() {
  try {
    await mongoose.connect(DB_CONNECT);
    console.log("Connected to MongoDB");

    await getMonthlyData();
    console.log("Monthly data transfer successful");

    process.exit(0); 
  } catch (err) {
    process.exit(1);
  }
}

const getMonthlyData = async () => {
  try {
   
    await InputData.deleteMany({});

    const transformedExpence = CurrExpence.expence.map((categoryObj) => ({
      category: categoryObj.category,
      items: Object.entries(categoryObj.items).map(([name, item]) => ({
        name,
        value: item.value,
        date: item.date ? new Date(item.date) : null,
        paymentMethod: item.payMethod || '',
      })),
    }));

    const monthlyData = new InputData({
      userId : "685bb07b89dd82abe19889a4",
      totalBudget: CurrExpence.totalBudget.value,
      expence: transformedExpence,
    });

    await monthlyData.save();
  } catch (error) {

    throw error;
  }
};

main();
