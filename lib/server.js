import express from "express";
import Question from "./models/Question.js";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("We work!");
});

app.get("/questions", (req, res) => {
  Question.find({}).then((data) => {
    res.json(data);
  });
});


