// src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizzes } from '../data/quizzes';

const Quiz = () => {
  const { id } = useParams();
  const quiz = quizzes.find((quiz) => quiz.id.toString() === id);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30); // Timer set to 30 seconds
  const [answeredCount, setAnsweredCount] = useState(0); // Track answered questions
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleNextQuestion();
    }
  }, [timeLeft]);

  const handleAnswer = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = option;
    setAnswers(updatedAnswers);
    if (option === quiz.questions[currentQuestionIndex].correct) {
      setScore(score + 1);
    }
    if (!answers[currentQuestionIndex]) {
      setAnsweredCount(answeredCount + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30); // Reset timer for the next question
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setTimeLeft(30); // Reset timer for the previous question
    }
  };

  const handleEndQuiz = () => {
    navigate('/result', {
      state: {
        score,
        total: quiz.questions.length,
        answeredCount,
      },
    });
  };

  return (
    <div className="quiz-container">
      <h2>{quiz.title}</h2>
      <div className="quiz">
        <h3>{quiz.questions[currentQuestionIndex].question}</h3>
        <div className="quiz-timer">Time Left: {timeLeft} seconds</div>
        {quiz.questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            style={{
              backgroundColor: answers[currentQuestionIndex] === option ? 'lightgreen' : '',
            }}
            className="quiz-options"
          >
            {option}
          </button>
        ))}
        <div className="quiz-navigation-buttons">
          <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
            Previous
          </button>
          {currentQuestionIndex < quiz.questions.length - 1 ? (
            <button onClick={handleNextQuestion}>
              Next
            </button>
          ) : (
            <button onClick={handleEndQuiz} className="end-quiz-button">
              End Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
