import Question from "../models/Question.js";
import questionsjson from "../data/hipHopQuestions.json" assert { type: "json" };

Question.deleteMany({}).then(() => {
    Question.create(questionsjson).then(() => {
        console.log(data);
        process.exit();
    });
});