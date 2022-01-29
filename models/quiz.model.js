const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizSchema = new Schema({
    levelName: String,
    questions: [{
        img: { type: String, required: false },
        text: { type: String, required: "Please enter question" },
        points: { type: Number, required: "Please enter points" },
        negativePoints: { type: Number, required: "Please enter negative points" },
        options: [{
            value: { type: String, required: "please enter option value" },
            isCorrect: { type: Boolean, required: "please enter isCorrent boolean value" }
        }]
    }]
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = { Quiz };