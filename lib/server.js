import mongoose from "./db/connection.js";
import express from "express";
import Question from "./models/Question.js";

const app = express();
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`app listening on port ${port}`))

app.get("/", (req, res) => {
  Question.find({}).then((data) => {
    res.json(data);
  });
});
app.post("/", (req, res) => {
  Question.find({}).then((data) => {
    res.json(data);
  });
});
app.put("/", (req, res) => {
  Question.find({}).then((data) => {
    res.json(data);
  });
});
app.delete("/", (req, res) => {
  Question.find({}).then((data) => {
    res.json(data);
  });
});
``
mongoose.connection.on("disconnected", () =>
  console.log("Disconnected from MongoDB!")
);
