import Goals from '../models/goals.models.js';
import User from '../../../Webpage/Backend/models/user.models.js';

const goals = async (req, res) => {
    try {
        const { name, value } = req.body;

        if (!name || value === undefined || value === null) {
            return res.status(400).json({ message: "Missing name or value" });
        }
        console.log(`Received goal:  ${name} - ₹${value}`);

        const userId = "685bb07b89dd82abe19889a4";
        const update = { $set: { [name]: value } };

        const newGoal = await Goals.findOneAndUpdate(
            { userId: userId },
            update,
            { new: true }
        );

        if (!newGoal) {
            return res.status(404).json({ message: "Goal not found" });
        }
        
        return res.status(200).json(newGoal);

    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


export default goals