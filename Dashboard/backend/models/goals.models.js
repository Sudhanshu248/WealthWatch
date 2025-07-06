import mongoose from "mongoose";
import { Schema } from "mongoose";

const GoalsSchema = new mongoose.Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    food: {
        type: Number,
    },
    housing: {
        type: Number
    },
    personal: {
        type: Number
    },
    saving: {
        type: Number
    },
    transportation: {
        type: Number
    }
});

const Goals = mongoose.model("Goals", GoalsSchema);

export default Goals;