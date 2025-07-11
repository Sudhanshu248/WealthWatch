import Goals from '../models/goals.models.js';
import User from '../models/user.models.js';

// GET goals for a user
export const getGoals = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: "No token provided" });

    const user = await User.findOne({ token });
    if (!user) return res.status(401).json({ message: "Unauthorized user" });

    const goalsData = await Goals.findOne({ userId: user._id });

    if (!goalsData) {
      return res.status(404).json({ message: "No goals found for this user" });
    }

    return res.status(200).json(goalsData);
  } catch (error) {
    console.error("Error in getGoals:", error);
    return res.status(500).json({ message: error.message });
  }
};



// POST or UPDATE a goal
export const goals = async (req, res) => {
  try {
    const { name, value } = req.body;
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: "No token provided" });

    const user = await User.findOne({ token }); // ✅ Proper usage

    if (!user) return res.status(401).json({ message: "Unauthorized user" });

    const update = { $set: { [name]: value } };

    const updatedGoal = await Goals.findOneAndUpdate(
      { userId: user._id },
      update,
      { new: true }
    );

    if (!updatedGoal) {
      const createdGoal = await Goals.create({ userId: user._id, [name]: value });
      return res.status(201).json(createdGoal);
    }

    return res.status(200).json(updatedGoal);
  } catch (error) {
    console.error("Error in goals POST:", error);
    return res.status(500).json({ message: error.message });
  }
};



