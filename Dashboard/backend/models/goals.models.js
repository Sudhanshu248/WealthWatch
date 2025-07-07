import mongoose from "mongoose";
import { Schema } from "mongoose";

const GoalsSchema = new mongoose.Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    Food: {
        type: Number,
    },
    Housing: {
        type: Number
    },
    Personal: {
        type: Number
    },
    Saving: {
        type: Number
    },
    Transportation: {
        type: Number
    }
});

const Goals = mongoose.model("Goals", GoalsSchema);

export default Goals;