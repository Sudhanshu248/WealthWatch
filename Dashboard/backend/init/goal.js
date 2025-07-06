import Goals from "../models/goals.models.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
let DB_CONNECT="mongodb+srv://sainisudhanshu389:WKKlBH58fXyqHE2A@wealthwatchcluster.6vudzkg.mongodb.net/WealthWatch?retryWrites=true&w=majority&appName=WealthWatchCluster"
let dblink = process.env.DB_CONNECT;
async function main() {
    try {
        await mongoose.connect(DB_CONNECT);
        console.log("Connected to MongoDB");

        await getGoalData();
        console.log("Monthly data transfer successful");

        process.exit(0);
    } catch (err) {
        process.exit(1);
    }
}

const getGoalData = async () => {
    try {
        await Goals.deleteMany({})
        let goals = new Goals({
            userId:"685bb07b89dd82abe19889a4",
            housing: 200,
            food: 150,
            transportation: 100,
            personal: 100,
            saving: 150
        })
        await goals.save();
        console.log("Goal data saved");
    }
    catch {
        console.log("Error in saving goal data");
    }
}

main();
