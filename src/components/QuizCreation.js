// src/components/QuizCreation.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizzes } from '../data/quizzes';

const QuizCreation = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correct: '' }]);
  const navigate = useNavigate();

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], correct: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    quizzes.push({ id: quizzes.length, title, questions });
    navigate('/');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="create-quiz-container">
      <h2>Create Quiz</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="create-quiz-name"
        />
        {questions.map((q, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Question"
              value={q.question}
              onChange={(e) =>
                setQuestions(
                  questions.map((ques, i) =>
                    i === index ? { ...ques, question: e.target.value } : ques
                  )
                )
              }
              required
              className="create-quiz-ques"
            />
            {q.options.map((opt, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Option ${i + 1}`}
                value={opt}
                onChange={(e) =>
                  setQuestions(
                    questions.map((ques, qIndex) =>
                      qIndex === index
                        ? {
                            ...ques,
                            options: ques.options.map((o, oIndex) =>
                              oIndex === i ? e.target.value : o
                            ),
                          }
                        : ques
                    )
                  )
                }
                required
                className="create-quiz-options"
              />
            ))}
            <select
              value={q.correct}
              onChange={(e) =>
                setQuestions(
                  questions.map((ques, qIndex) =>
                    qIndex === index ? { ...ques, correct: e.target.value } : ques
                  )
                )
              }
              required
              className="create-quiz-select-option"
            >
              <option value="" disabled>
                Select Correct Option
              </option>
              {q.options.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}
        <div className="create-quiz-buttons">
          <button type="button" onClick={addQuestion}>
            Add Question
          </button>
          <button type="submit">Create Quiz</button>
        </div>
        <button onClick={handleBackToHome} className="back-to-home-button">
          Back to Home
        </button>
      </form>
    </div>
  );
};

export default QuizCreation;
