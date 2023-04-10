import { Schema } from "mongoose"
import mongoose from "../connection.js"
const Schema = mongoose.Schema 

const QuestionSchema = new Schema({
    question: {
        type: String,
        trim: true
    },

    answers: {
        correct: {
            type: String
        }
    },
})

export default mongoose.model("questions", QuestionSchema)