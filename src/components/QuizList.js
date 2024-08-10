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
            <button 
              className="start-quiz-button" 
              onClick={() => window.location.href = `/quiz/${quiz.id}`}
            >
              Start Quiz
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
