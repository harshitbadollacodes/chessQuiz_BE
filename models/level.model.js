const mongoose = require("mongoose");
const { Schema } = mongoose;

const levelSchema = new Schema({
    img: { type: String, required: "Please enter image URL" },
    levelName: { type: String, required: "Please enter level name" },
});

const Level = mongoose.model("Level", levelSchema);

module.exports  = { Level };