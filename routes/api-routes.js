// const router = require("express").Router();
const Workout = require("../models/workout.js");

module.exports = function (app) {

  app.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", ({ body }, res) => {
    Workout.insertMany(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.delete("/api/workouts/:id", ({ body }, res) => {
    Workout.insertMany(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workouts", (req, res) => {
    Workout.find()
      // .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
        // console.log('request', req);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

};
  // module.exports = router;


