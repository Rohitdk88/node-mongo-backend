const express = require('express');
const Question = require('../models/question_new.model.js');
const router = express.Router();
const {getQuestions, getQuestion, addQuestion, updateQuestion, deleteQuestion} = require('../controllers/question.controller.js');
// const {getQuestion} = require('../controllers/question.controller.js');

router.get('/', getQuestions);
router.get('/:id', getQuestion);

router.post('/', addQuestion);

router.put('/:id', updateQuestion);

router.delete('/:id', deleteQuestion);

module.exports = router;