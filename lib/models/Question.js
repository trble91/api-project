import mongoose from "../db/connection.js";

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: {
    type: String,
    trim: true,
  },
  answer: {
    choices: {
      type: [String]
    },
    correct: {
      type: String,
      trim: true
    }
  }
});

export default mongoose.model("questions", QuestionSchema);
