const questionService = require('../services/question.service');

class QuestionController {
    async createQuestion(req, res) {
        try {
            const { questionText, type, options } = req.body;

            const questionData = {
                questionText,
                type,
                options: type === 'MCQ' ? JSON.parse(options) : null
            };

            if (req.file) {
                questionData.image = req.file.path;
            }

            const question = await questionService.createQuestion(questionData);
            res.status(201).json(question);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getExamQuestions(req, res) {
        try {
            const questions = await questionService.getRandomQuestions(10);
            res.status(200).json(questions);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new QuestionController();
