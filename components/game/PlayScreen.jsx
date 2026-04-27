"use client";

import { useState } from 'react';

export function PlayScreen({
  currentQuestion,
  totalQuestions,
  score,
  streak,
  timeLeft,
  maxTime,
  question,
  selectedAnswer,
  isCorrect,
  showFeedback,
  onAnswer
}) {
  const [imageError, setImageError] = useState(false);
  
  const timerPercentage = (timeLeft / maxTime) * 100;
  const timerClass = timeLeft <= 3 ? 'danger' : timeLeft <= 7 ? 'warning' : '';

  const getOptionClass = (option) => {
    if (!showFeedback) return 'option-btn';
    
    if (option === question?.character?.name) {
      return 'option-btn correct';
    }
    if (option === selectedAnswer && !isCorrect) {
      return 'option-btn incorrect';
    }
    return 'option-btn';
  };

  return (
    <div className="card">
      {/* Stats Row */}
      <div className="stats-row">
        <div className="stat-box">
          <div className="stat-label">Score</div>
          <div className="stat-value">{score}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Streak</div>
          <div className="stat-value streak">{streak > 0 ? `${streak}x` : '-'}</div>
        </div>
      </div>

      {/* Timer */}
      <div className="timer-container">
        <div className="timer-bar">
          <div 
            className={`timer-fill ${timerClass}`}
            style={{ width: `${timerPercentage}%` }}
          />
        </div>
        <div className="timer-text">{timeLeft} seconds remaining</div>
      </div>

      {/* Character Image */}
      <div className="character-container">
        <div className="character-image-wrapper">
          {!imageError && question?.character?.image ? (
            <img
              src={question.character.image}
              alt="Guess this character"
              className="character-image"
              onError={() => setImageError(true)}
              crossOrigin="anonymous"
            />
          ) : (
            <span className="character-placeholder">?</span>
          )}
        </div>
      </div>

      {/* Question */}
      <div className="question-number">
        Question {currentQuestion + 1} of {totalQuestions}
      </div>
      <div className="question-text">Who is this character?</div>

      {/* Answer Options */}
      <div className="options-grid">
        {question?.options?.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(option)}
            onClick={() => onAnswer(option)}
            disabled={showFeedback}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect 
            ? `Correct! +${100 + timeLeft * 5 + (streak > 0 ? (streak - 1) * 10 : 0)} points` 
            : `Wrong! The answer was ${question?.character?.name}`
          }
        </div>
      )}
    </div>
  );
}
