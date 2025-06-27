const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new mongoose.Schema({
    profilePicture: {
        type: String,
        default: "profile.png"
    },
    name: {
        type: String,
        required: true
    },
    email: {
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
    averageExpenses: {
        type: Number,
        default: 0
    }
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;