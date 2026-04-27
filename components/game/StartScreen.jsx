"use client";

export function StartScreen({ onStart }) {
  return (
    <div className="card">
      <div className="game-header">
        <h1 className="game-title">Cartoon Character Quiz</h1>
        <p className="game-subtitle">
          Test your knowledge of famous cartoon characters!
        </p>
      </div>

      <div className="features-list">
        <div className="feature-item">
          <span className="feature-icon">✓</span>
          <span>10 questions per round</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">✓</span>
          <span>15 seconds per question</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">✓</span>
          <span>Bonus points for speed</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">✓</span>
          <span>Streak multiplier for consecutive answers</span>
        </div>
      </div>

      <button className="btn btn-primary" onClick={onStart}>
        Start Game
      </button>
    </div>
  );
}
