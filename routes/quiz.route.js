const express = require("express");
const mongoose = require("mongoose");

const { Quiz } = require("../models/quiz.model");
const { quizData } = require("../DB/quizData");

const router = express.Router();

router.route("/:levelName")
.get(async(req, res) => {
    try {
        const { levelName } = req.params;
        const quizDetails = await Quiz.find({ levelName });

        return res.json({ quizDetails });

    } catch(error) {
        console.log(error);
        return res.status(404).json({ 
            success: false, 
            message: "check error message",
            errorMessage: error.message
        })

    };
});

module.exports = router;