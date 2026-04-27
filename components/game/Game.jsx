"use client";

import { useGame } from '../../hooks/useGame';
import { StartScreen } from './StartScreen';
import { PlayScreen } from './PlayScreen';
import { GameOverScreen } from './GameOverScreen';

export function Game() {
  const {
    gameState,
    currentQuestion,
    totalQuestions,
    score,
    streak,
    bestStreak,
    correctAnswers,
    timeLeft,
    maxTime,
    questions,
    selectedAnswer,
    isCorrect,
    showFeedback,
    startGame,
    restartGame,
    handleAnswer
  } = useGame();

  return (
    <div className="game-wrapper">
      <div className="game-container">
        {gameState === 'start' && (
          <StartScreen onStart={startGame} />
        )}
        
        {gameState === 'playing' && questions[currentQuestion] && (
          <PlayScreen
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            score={score}
            streak={streak}
            timeLeft={timeLeft}
            maxTime={maxTime}
            question={questions[currentQuestion]}
            selectedAnswer={selectedAnswer}
            isCorrect={isCorrect}
            showFeedback={showFeedback}
            onAnswer={handleAnswer}
          />
        )}
        
        {gameState === 'gameOver' && (
          <GameOverScreen
            score={score}
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
            bestStreak={bestStreak}
            onRestart={restartGame}
          />
        )}
      </div>
    </div>
  );
}
