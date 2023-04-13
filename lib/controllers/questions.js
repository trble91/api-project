import Question from "../models/Question.js"

export const getQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        console.log(error.message);
        res.staus(500).json({ error: error.message });
    }
};

export const getQuestion = async (req, res) => {
    try {
      const { id } = req.params;
  
      const question = await Question.findById(id);
      res.json(question);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const createQuestion = async (req, res) => {
    try {
      const question = new Question(req.body);
      await question.save();
      res.status(201).json(question);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const updateQuestion = async (req, res) => {
    const { id } = req.params;
    const question = await Question.findByIdAndUpdate(id, req.body);
    res.status(200).json(question);
  };
  
  export const deleteQuestion = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Question.findByIdAndDelete(id);
  
      if (deleted) {
        return res.status(200).send("Question Deleted!");
      }
  
      throw new Error("Question not found");
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };

