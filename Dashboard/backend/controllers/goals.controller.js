import mongoose from "mongoose";
import Goals from '../models/goals.models.js';
import User from '../models/user.models.js';

export const getGoals = async (req, res) => {
    try {
        // Convert string to ObjectId
        const userId = mongoose.Types.ObjectId("685bb07b89dd82abe19889a4");
        const goalsData = await Goals.findOne({ userId: userId });
        console.log("Fetched goals:", goalsData);

        if (!goalsData) {
            return res.status(404).json({ message: "No goals found for this user" });
        }

        return res.status(200).json(goalsData);
    } catch (error) {
        console.error("Error in getGoals:", error);
        return res.status(500).json({ message: error});
    }
};

export const goals = async (req, res) => {
    try {

        if (!req.body || typeof req.body !== 'object') {
            console.log("Invalid req.body:", req.body);
            return res.status(400).json({ message: "Invalid request body format." });
        }

        const { name, value } = req.body;
         console.log("Received request body:", req.body);
        if (!name || value === undefined || value === null) {
            return res.status(400).json({ message: "Missing name or value" });
        }
        console.log(`Received goal:  ${name} - ₹${value}`);

      
        
        // Convert string to ObjectId
        const userId = mongoose.Types.ObjectId("685bb07b89dd82abe19889a4");
        const update = { $set: { [name]: value } };

        const newGoal = await Goals.findOneAndUpdate(
            { userId:  userId},
            update,
            { new: true }
        );

        if (!newGoal) {
            // If not found, create a new document for this user
            const createdGoal = await Goals.create({ userId, [name]: value });
            return res.status(201).json(createdGoal);
        }

        return res.status(200).json(newGoal);

    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



