const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question.controler');
const multer = require('multer');

// File upload setup
const upload = multer({ dest: 'uploads/' });

// POST /question (create question)
router.post('/question', upload.single('file'), questionController.createQuestion);

// GET /exam (get random questions for exam)
router.get('/exam', questionController.getExamQuestions);

module.exports = router;
