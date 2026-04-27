"use client"

import { Button } from "@/components/ui/button"
import { Timer } from "./timer"
import { ScoreDisplay } from "./score-display"
import { CharacterImage } from "./character-image"
import { AnswerOptions } from "./answer-options"
import { ArrowRight, XCircle } from "lucide-react"
import type { CartoonCharacter } from "@/lib/game-data"
import type { GameStats, GameState } from "@/hooks/use-game"

interface PlayScreenProps {
  character: CartoonCharacter
  options: string[]
  selectedAnswer: string | null
  timeLeft: number
  timerDuration: number
  stats: GameStats
  gameState: GameState
  onAnswer: (answer: string) => void
  onNext: () => void
  onEnd: () => void
}

export function PlayScreen({
  character,
  options,
  selectedAnswer,
  timeLeft,
  timerDuration,
  stats,
  gameState,
  onAnswer,
  onNext,
  onEnd,
}: PlayScreenProps) {
  const isAnswered = gameState === "answered"
  const isCorrect = selectedAnswer === character.name
  const timedOut = isAnswered && selectedAnswer === null

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <ScoreDisplay stats={stats} />
        <Timer timeLeft={timeLeft} maxTime={timerDuration} />
      </div>

      <div className="mx-auto w-full max-w-md">
        <CharacterImage
          src={character.imageUrl}
          alt="Cartoon character to guess"
          showName={isAnswered ? character.name : undefined}
          showTitle={isAnswered ? character.show : undefined}
        />
      </div>

      <div className="space-y-2">
        <h2 className="text-center text-xl font-semibold text-foreground">
          Who is this character?
        </h2>
        {timedOut && (
          <p className="text-center text-destructive font-medium animate-in fade-in duration-200">
            Time&apos;s up! The answer was {character.name}
          </p>
        )}
        {isAnswered && !timedOut && (
          <p className={`text-center font-medium animate-in fade-in duration-200 ${isCorrect ? "text-success" : "text-destructive"}`}>
            {isCorrect ? "Correct! Well done!" : `Wrong! It was ${character.name}`}
          </p>
        )}
      </div>

      <AnswerOptions
        options={options}
        correctAnswer={character.name}
        selectedAnswer={selectedAnswer}
        onSelect={onAnswer}
        disabled={isAnswered}
      />

      {isAnswered && (
        <div className="flex justify-center gap-4 pt-2 animate-in slide-in-from-bottom-4 duration-300">
          <Button
            variant="outline"
            onClick={onEnd}
            className="gap-2"
          >
            <XCircle className="h-4 w-4" />
            End Game
          </Button>
          <Button
            onClick={onNext}
            className="gap-2"
          >
            Next Question
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
