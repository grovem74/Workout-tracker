var db = require("../models");

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        db.workouts.find({}).then(function (dbWorkouts) {
            res.json(dbWorkouts);
        });
    });



};