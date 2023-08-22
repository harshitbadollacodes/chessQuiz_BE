const mongoose = require("mongoose");
const env = require("dotenv")

env.config();

async function initializeDBConnection() {
    try {       
        const dbURI = process.env.DB_URI;
        const mongooseConnection = await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        if (mongooseConnection) {
            console.log("mongoose Connected")
        }
    } catch(error) {
        console.log(error);
    }
}

module.exports = { initializeDBConnection };