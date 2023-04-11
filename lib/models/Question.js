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

const Question = new Schema({
  question: {
    type: String,
    trim: true,
  },
  answer: {
    choices: {
      type: [String], // Update to an array of strings for multiple answer choices
    },
    correct: {
      type: String,
      trim: true,
    },
  },
});

export default mongoose.model("questions", Question);
