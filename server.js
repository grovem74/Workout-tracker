// // dependencies
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const mongoose = require('mongoose');
const path = require("path");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'html');


// routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


// Connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:workout1@ds161144.mlab.com:61144/heroku_b3h1pvl1", { useNewUrlParser: true }, () => {
    console.log('connected to mongodb');
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
