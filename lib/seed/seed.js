import db from "../db/connection.js";
import Question from "../models/Question.js";
import questions from "./hipHopQuestions.json" assert { type: "json" };

const insertData = async () => {
  // reset db
  await db.dropDatabase()
  //insert question into db
  await Question.insertMany(questions);

  db.close();
};

insertData();
