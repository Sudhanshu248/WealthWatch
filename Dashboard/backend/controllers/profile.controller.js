import User from "../models/user.models.js";
import Form from "../models/form.models.js";

export const uploadProfilePicture = async (req, res) => {
    try {
        const file = req.file;
        if (!file) return res.status(400).json({ message: "No file uploaded" });

        const token = req.headers.authorization;
        if (!token) return res.status(401).json({ message: "No token provided" });

        const user = await User.findOne({ token });
        if (!user) return res.status(401).json({ message: "Unauthorized user" });

        const form = await Form.findOne({ userId: user._id });

        if (!form) {
            return res.status(404).json({ message: "Form data not found" });
        }

        form.profilePicture = req.file.filename;

        await form.save();

        return res.json({ message: "Profile Picture Updated" });

    } catch (error) {

        return res.status(500).json({ message: error.message });
    }
};


export const getUserData = async (req, res) => {
    try {
        const token = req.headers.authorization;
        if (!token) return res.status(401).json({ message: "No token provided" });

        const user = await User.findOne({ token });
        if (!user) return res.status(401).json({ message: "Unauthorized user" });

        const formData = await Form.findOne({ userId: user._id });

        const data = await User.findOne({ _id: user._id });
        const { email } = data;

        const userData = {
            email,
        };

        console.log(userData);
        if (!formData || !userData) {
            return res.status(404).json({ message: "No data found for this user" });
        }
        return res.status(200).json({ formData, userData });

    } catch (error) {
        console.error("Error in getGoals:", error);
        return res.status(500).json({ message: error.message });
    }
};


export const updateProfileData = async (req, res) => {
    try {
        const { profession, income } = req.body;

      
        if (profession === undefined && income === undefined) {
            return res.status(400).json({ message: "No fields provided for update" });
        }

        const updateData = {};
        if (profession !== undefined) updateData.profession = profession;
        if (income !== undefined) updateData.income = income;

        const token = req.headers.authorization;
        if (!token) return res.status(401).json({ message: "No token provided" });

        const user = await User.findOne({ token });
        if (!user) return res.status(401).json({ message: "Unauthorized user" });

        const updatedProfile = await Form.findOneAndUpdate(
            { userId: user._id },
            { $set: updateData },
            { new: true }
        );

        if (!updatedProfile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        return res.status(200).json(updatedProfile);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
