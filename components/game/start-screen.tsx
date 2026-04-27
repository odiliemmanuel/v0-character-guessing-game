"use client"

import { Button } from "@/components/ui/button"
import { Play, Sparkles, Timer, Flame } from "lucide-react"

interface StartScreenProps {
  onStart: () => void
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
          Cartoon Character Guessing Game
        </h1>
        <p className="mx-auto max-w-md text-lg text-muted-foreground">
          Test your cartoon knowledge! Can you identify all the famous characters?
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="flex flex-col items-center gap-2 rounded-xl bg-card p-4 shadow-sm">
          <Sparkles className="h-8 w-8 text-primary" />
          <span className="font-medium text-foreground">15 Characters</span>
          <span className="text-sm text-muted-foreground">Classic cartoons</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-xl bg-card p-4 shadow-sm">
          <Timer className="h-8 w-8 text-primary" />
          <span className="font-medium text-foreground">15 Seconds</span>
          <span className="text-sm text-muted-foreground">Per question</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-xl bg-card p-4 shadow-sm">
          <Flame className="h-8 w-8 text-primary" />
          <span className="font-medium text-foreground">Streak Bonus</span>
          <span className="text-sm text-muted-foreground">Chain correct answers</span>
        </div>
      </div>

      <Button
        size="lg"
        onClick={onStart}
        className="gap-2 px-8 py-6 text-lg font-semibold shadow-md hover:shadow-lg transition-shadow"
      >
        <Play className="h-5 w-5" />
        Start Game
      </Button>
    </div>
  )
}
