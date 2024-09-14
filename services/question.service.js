const sequelize = require('../config/database');
const Question = require('../models/question');

class QuestionService {
    async createQuestion(data) {
        return await Question.create(data);
    }

    async getRandomQuestions(limit = 10) {
        return await Question.findAll({
            order: sequelize.random(), // Fetch random questions
            limit,
        });
    }
}

module.exports = new QuestionService();