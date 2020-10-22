const express = require('express');
const path = require('path');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// routerの設定
const indexRouter = require('./routes/index');
const quizRouter = require('./routes/quiz');

app.use('/', indexRouter);
app.use('/quiz', quizRouter);

module.exports = app;