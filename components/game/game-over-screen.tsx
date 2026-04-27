"use client"

import { Button } from "@/components/ui/button"
import { Trophy, Target, Flame, RotateCcw } from "lucide-react"
import type { GameStats } from "@/hooks/use-game"

interface GameOverScreenProps {
  stats: GameStats
  onPlayAgain: () => void
}

export function GameOverScreen({ stats, onPlayAgain }: GameOverScreenProps) {
  const accuracy = stats.questionsAnswered > 0
    ? Math.round((stats.correctAnswers / stats.questionsAnswered) * 100)
    : 0

  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Game Over!
        </h2>
        <p className="text-lg text-muted-foreground">
          Great effort! Here are your results:
        </p>
      </div>

      <div className="grid w-full max-w-sm gap-4">
        <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <span className="font-medium text-foreground">Final Score</span>
          </div>
          <span className="text-2xl font-bold text-primary">{stats.score}</span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
              <Target className="h-6 w-6 text-success" />
            </div>
            <span className="font-medium text-foreground">Accuracy</span>
          </div>
          <span className="text-2xl font-bold text-success">
            {accuracy}%
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Flame className="h-6 w-6 text-secondary-foreground" />
            </div>
            <span className="font-medium text-foreground">Best Streak</span>
          </div>
          <span className="text-2xl font-bold text-secondary-foreground">
            {stats.bestStreak}
          </span>
        </div>

        <div className="rounded-xl bg-muted p-4">
          <p className="text-sm text-muted-foreground">
            {stats.correctAnswers} correct out of {stats.questionsAnswered} questions
          </p>
        </div>
      </div>

      <Button
        size="lg"
        onClick={onPlayAgain}
        className="gap-2 px-8 py-6 text-lg font-semibold shadow-md hover:shadow-lg transition-shadow"
      >
        <RotateCcw className="h-5 w-5" />
        Play Again
      </Button>
    </div>
  )
}
