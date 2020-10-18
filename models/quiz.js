const fetch = require('node-fetch');

const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';

class Quiz {
    constructor({ id, category, difficulty, question, correct_answer, incorrect_answers }) {
        this.id = id;
        this.category = category;
        this.difficulty = difficulty;
        this.question = question;
        this.correct_answer = correct_answer;
        this.incorrect_answers = incorrect_answers;
    }
}

module.exports = {
    getQuizzes: async () => {
        let responseBodyOfFetch;

        try {
            const responseOfFetch = await fetch(API_URL);
            responseBodyOfFetch = await responseOfFetch.json();
        } catch (error) {
            throw error;
        }

        const quizzes = responseBodyOfFetch.results;
        const newQuizzes = [];

        quizzes.forEach((quiz, idx) => {
            newQuizzes.push(new Quiz({
                id: idx,
                category: quiz.category,
                difficulty: quiz.difficulty,
                question: quiz.question,
                correct_answer: quiz.correct_answer,
                incorrect_answers: quiz.incorrect_answers
            }));
        });

        return newQuizzes;
    }
};