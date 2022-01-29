const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "Please enter first name"
    },

    lastName: {
        type: String,
        trim: true,
        required: "Please enter first name"
    },

    email: {
        type: String,
        trim: true,
        required: "Please enter email",
        unique: true
    },
    
    password: {
        type: String,
        trim: true,
        required: "Please enter password"
    }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };