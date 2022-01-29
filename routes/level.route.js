const express = require("express");
const { Level } = require("../models/level.model");
const { Quiz } = require("../models/quiz.model");
const { quizData } = require("../DB/quizData");
const { levelData } = require("../DB/levelData");

const router = express.Router();

const loadInitialData = (modelName, data) => {
    data.forEach(async(d) => {
        const newEntry = await new modelName(d);
        const saveNewEntry = newEntry.save();
    });
};

// loadInitialData(Level, levelData);
// loadInitialData(Quiz, quizData);

router.route("/")
.get(async (req, res) => {
    try {
        const levels = await Level.find({});
        return res.json({ success: true, levels })
            
    } catch(error) {
        console.log({ error });
        res.status(404).json({
            success: false,
            message: "Something went wrong",
            errMessage: error.message
        })
    }
});

router.route("/:quizId")
.get(async (req, res) => {
    try {
        const { quizId } = req.params;
        const quiz = await Quiz.findById(quizId);
        
        return res.json({ quiz });

    } catch(error) {
        console.log({ error });
        res.status(404).json({
            success: false,
            message: "Something went wrong",
            errMessage: error.message
        })
    }
});

module.exports = router;