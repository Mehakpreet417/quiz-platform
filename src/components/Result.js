// src/components/Result.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { score, total, answeredCount } = location.state;
  const unansweredCount = total - answeredCount;
  const navigate = useNavigate();

  return (
    <div className="result-container">
      <h2>Quiz Result</h2>
      <p className="result-scores">Your Score: {score} / {total}</p>
      <p className="result-answer">Answered Questions: {answeredCount}</p>
      <p className="result-answer">Unanswered Questions: {unansweredCount}</p>
      <button onClick={() => navigate('/')}>Back to Quiz List</button>
    </div>
  );
};

export default Result;
