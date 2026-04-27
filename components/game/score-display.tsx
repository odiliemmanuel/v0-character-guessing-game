"use client"

import { Flame, Star, Trophy } from "lucide-react"
import type { GameStats } from "@/hooks/use-game"

interface ScoreDisplayProps {
  stats: GameStats
}

export function ScoreDisplay({ stats }: ScoreDisplayProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm">
        <Trophy className="h-5 w-5 text-primary" />
        <span className="font-bold text-foreground">{stats.score}</span>
      </div>
      
      {stats.streak > 0 && (
        <div className="flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 shadow-sm animate-in zoom-in duration-200">
          <Flame className="h-5 w-5 text-success" />
          <span className="font-bold text-success">{stats.streak} Streak</span>
        </div>
      )}
      
      {stats.bestStreak > 0 && (
        <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 shadow-sm">
          <Star className="h-4 w-4 text-secondary-foreground" />
          <span className="text-sm text-secondary-foreground">Best: {stats.bestStreak}</span>
        </div>
      )}
    </div>
  )
}
