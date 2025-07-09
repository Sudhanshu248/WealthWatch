import mongoose from "mongoose";
import dotenv from "dotenv";
import { sixMonthExpense } from "../../Frontend/src/Components/data/LastSixMonthExp.js";
import InputData from "../models/inputData.models.js";

dotenv.config();
const DB_CONNECT = process.env.DB_CONNECT;

async function main() {
  try {
    await mongoose.connect(DB_CONNECT);
    console.log(" Connected to MongoDB");

    await seedSixMonthData();
    console.log(" Expense data seeded successfully");

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error(" Error:", err);
    process.exit(1);
  }
}

const seedSixMonthData = async () => {
  try {
    await InputData.deleteMany({}); // Clean old data

    const userId = "685bb07b89dd82abe19889a4"; // example user ID

    const Monthly = sixMonthExpense.map((monthData) => {
      const expence = monthData.expence.map((categoryObj) => ({
        category: categoryObj.category,
        items: Object.entries(categoryObj.items).map(([name, item]) => ({
          name,
          price: item.value,
          date: new Date(item.date),
          paymentMethod: item.payMethod
        }))
      }));

      return {
        month: monthData.month,
        totalBudget: monthData.totalBudget.value,
        expence,
        createdAt: new Date()
      };
    });

    const userEntry = new InputData({
      userId,
      Monthly
    });

    await userEntry.save();
  } catch (error) {
    console.error(" Seed Error:", error);
    throw error;
  }
};

main();
