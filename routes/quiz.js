const express = require('express');
const router = express.Router();
const controller = require('../controllers/quiz');

router.route('/')
  .get(controller.getQuizzes)

module.exports = router;
