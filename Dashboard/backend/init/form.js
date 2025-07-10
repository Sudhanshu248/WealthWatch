import Form from "../models/form.models.js";
import mongoose from "mongoose";

async function main() {
    try {
        await mongoose.connect(DB_CONNECT);
        console.log("Connected to MongoDB");

        await getFormData();
        console.log("Monthly data transfer successful");

        process.exit(0);
    } catch (err) {
        process.exit(1);
    }
}

const getFormData = async () => {
    try {
        await Form.deleteMany({});
        const form = new Form({
            profilePicture: "profile.png", // Optional: will default if omitted
            userId: "685bb07b89dd82abe19889a4",
            name: "John Doe",
            profession: "Software Engineer",
            income: 85000
        });
        await form.save();
    } catch (error) {
        console.log(error);
    }
}

main();

