const Quiz = require('../models/quiz');

module.exports = {
    getQuizzes: async (req, res) => {
        let quizzes;

        try {
            quizzes = await Quiz.getQuizzes();
        } catch (error) {
            console.error('Error:', error);

            res.status(500);
            return res.end('500 error! : ' + error);
        }

        res.status(200).json(quizzes);
    }
};