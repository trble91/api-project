import mongoose from "../db/connection.js";
const Schema = mongoose.Schema;

// const Question = new Schema({
//   question: {
//     type: String,
//     trim: true
//   },
//   answers: {
//     correct: {
//       type: String,
//       trim: true
//     },
//   }
// });

const QuestionSchema = new Schema({
  question: {
    type: String,
    trim: true,
  },
  answer: {
    correct: {
      type: String,
      trim: true,
      required: true
    },
  },
});

export default mongoose.model("questions", QuestionSchema);
