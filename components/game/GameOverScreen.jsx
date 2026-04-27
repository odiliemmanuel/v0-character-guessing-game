"use client";

export function GameOverScreen({
  score,
  correctAnswers,
  totalQuestions,
  bestStreak,
  onRestart
}) {
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
  
  const getMessage = () => {
    if (accuracy === 100) return "Perfect Score! Amazing!";
    if (accuracy >= 80) return "Excellent! You really know your cartoons!";
    if (accuracy >= 60) return "Good job! Keep practicing!";
    if (accuracy >= 40) return "Not bad! Try again to improve!";
    return "Keep trying! You'll get better!";
  };

  return (
    <div className="card">
      <h1 className="game-over-title">Game Over!</h1>
      
      <div className="final-score">{score}</div>
      <div className="final-score-label">Total Points</div>
      
      <p className="game-subtitle" style={{ marginBottom: '24px' }}>
        {getMessage()}
      </p>
      
      <div className="results-grid">
        <div className="result-item">
          <div className="result-value">{correctAnswers}/{totalQuestions}</div>
          <div className="result-label">Correct</div>
        </div>
        <div className="result-item">
          <div className="result-value">{accuracy}%</div>
          <div className="result-label">Accuracy</div>
        </div>
        <div className="result-item">
          <div className="result-value">{bestStreak}</div>
          <div className="result-label">Best Streak</div>
        </div>
      </div>
      
      <button className="btn btn-primary" onClick={onRestart}>
        Play Again
      </button>
    </div>
  );
}
