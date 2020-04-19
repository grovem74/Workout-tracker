// // dependencies
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const mongoose = require('mongoose');
const path = require("path");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'html');

// Connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", { useNewUrlParser: true }, () => {
    console.log('connected to mongodb');
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
