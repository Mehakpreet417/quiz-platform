// src/components/QuizList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { quizzes } from '../data/quizzes';

const QuizList = () => {
  return (
    <div className="quiz-list-container">
      <h2>Quiz List</h2>
      <ul className="quiz-list">
        {quizzes.map((quiz) => (
          <li key={quiz.id} className="quiz-list-item">
            <span className="quiz-list-title">{quiz.title}</span>
            <Link to={`/quiz/${quiz.id}`} className="start-quiz-button">
              Start Quiz
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
