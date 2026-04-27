"use client"

import { useGame } from "@/hooks/use-game"
import { StartScreen } from "./start-screen"
import { PlayScreen } from "./play-screen"
import { GameOverScreen } from "./game-over-screen"

export function GameContainer() {
  const {
    gameState,
    currentQuestion,
    selectedAnswer,
    timeLeft,
    stats,
    startGame,
    nextQuestion,
    handleAnswer,
    endGame,
    timerDuration,
  } = useGame()

  return (
    <main className="min-h-screen px-4 py-8 md:py-12">
      <div className="mx-auto max-w-2xl">
        {gameState === "idle" && (
          <StartScreen onStart={startGame} />
        )}

        {(gameState === "playing" || gameState === "answered") && currentQuestion && (
          <PlayScreen
            character={currentQuestion.character}
            options={currentQuestion.options}
            selectedAnswer={selectedAnswer}
            timeLeft={timeLeft}
            timerDuration={timerDuration}
            stats={stats}
            gameState={gameState}
            onAnswer={handleAnswer}
            onNext={nextQuestion}
            onEnd={endGame}
          />
        )}

        {gameState === "gameover" && (
          <GameOverScreen stats={stats} onPlayAgain={startGame} />
        )}
      </div>
    </main>
  )
}
