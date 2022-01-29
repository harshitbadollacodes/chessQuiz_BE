const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models/user.model");
const dotenv = require("dotenv");

const router = express.Router();
dotenv.config();

router.route("/login")
.post(async (req, res) => {
    try {
        const secret = process.env.JWT_SECRET;
        const { email, password } = req.body;

        const findUser = await User.findOne({email});

        if (findUser) {
            const match = await bcrypt.compare(password, findUser.password);

            if (match) {
                const token = jwt.sign({ userId: findUser._id}, secret, { expiresIn: "24h"});
                return res.json({ 
                    success: true, 
                    message: "Auth success", 
                    firstName: findUser.firstName,
                    userId: findUser._id,
                    token 
                })
            } else {
                return res.status(401).json({
                    success: false,
                    message: "Password is incorrect"
                })
            }

        } else {
            return res.status(401).json({
                success: false,
                message: "Looks like you have not Signed up.",
            })
        }

    } catch(error) {
        res.status(401).json({
            success: false,
            error: "Auth failed",
            errMessage: error.message
        })
    }
});

router.route("/signup")
.post(async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const userAlreadySignedUp = await User.findOne({email});

        if (userAlreadySignedUp !== null) {
            return res.status(401).json({ success: false, message: "Email already exists. Please login" })
        }

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = new User({ firstName, lastName, email, password: hashedPassword });
        const saveNewUser = await newUser.save();

        const secret = process.env.JWT_SECRET;
        const token = jwt.sign({ userId: saveNewUser._id }, secret, { expiresIn: "24h" });

        res.json({
            success: true,
            message: "Sign up successful",
            firstName,
            userId: saveNewUser._id,
            token
        })

    } catch(error) {
        console.log(error);
        res.status(401).json({ success: false, message: "signup failed", errMessage: error.message })
    }
})

module.exports = router;