"use client"

import { cn } from "@/lib/utils"

interface TimerProps {
  timeLeft: number
  maxTime: number
}

export function Timer({ timeLeft, maxTime }: TimerProps) {
  const percentage = (timeLeft / maxTime) * 100
  const isLow = timeLeft <= 5
  const isCritical = timeLeft <= 3

  return (
    <div className="flex items-center gap-3">
      <div className="relative h-3 w-32 overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            "h-full transition-all duration-1000 ease-linear rounded-full",
            isCritical
              ? "bg-destructive"
              : isLow
              ? "bg-warning"
              : "bg-primary"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span
        className={cn(
          "min-w-[2ch] text-right font-mono text-xl font-bold tabular-nums",
          isCritical
            ? "text-destructive animate-pulse"
            : isLow
            ? "text-warning-foreground"
            : "text-foreground"
        )}
      >
        {timeLeft}
      </span>
    </div>
  )
}
