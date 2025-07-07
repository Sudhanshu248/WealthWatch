import mongoose from "mongoose";
import { Schema } from "mongoose";

const FormSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    profilePicture: {
        type: String,
        default: "profile.png"
    },
    name: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    income: {
        type: Number,
        required: true
    },
});

const Form = mongoose.model("Form", FormSchema);

export default Form;