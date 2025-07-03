const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormSchema = new mongoose.Schema({
    profilePicture: {
        type: String,
        default: "profile.png"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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

module.exports = Profile;