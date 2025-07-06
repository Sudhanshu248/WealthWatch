const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        required: true
    }, 
    token:{
        type: String,
        default: ""
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
