const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

const { verifyToken } = require("./middleware/verify-token-middleware");
const { initializeDBConnection }  = require("./DB/db.connect");
const loginRoute = require("./routes/authentication.route");
const levelRoute = require("./routes/level.route");
const quizRouter = require("./routes/quiz.route");

initializeDBConnection();

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Refer to the API docs at github.com/harshitbadollacodes/chessQuizBE"
    });
});

app.use("/user", loginRoute);
app.use("/levels", levelRoute);
app.use("/quiz", quizRouter);

app.listen(port, () => {
    console.log("Running on port 5000");
});