"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Check, X } from "lucide-react"

interface AnswerOptionsProps {
  options: string[]
  correctAnswer: string
  selectedAnswer: string | null
  onSelect: (answer: string) => void
  disabled: boolean
}

export function AnswerOptions({
  options,
  correctAnswer,
  selectedAnswer,
  onSelect,
  disabled,
}: AnswerOptionsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => {
        const isSelected = selectedAnswer === option
        const isCorrect = option === correctAnswer
        const showResult = selectedAnswer !== null
        const isWrongSelected = isSelected && !isCorrect

        return (
          <Button
            key={option}
            variant="outline"
            className={cn(
              "h-auto min-h-14 whitespace-normal px-4 py-3 text-base font-medium transition-all",
              "hover:scale-[1.02] active:scale-[0.98]",
              showResult && isCorrect && "border-success bg-success/10 text-success hover:bg-success/10",
              showResult && isWrongSelected && "border-destructive bg-destructive/10 text-destructive hover:bg-destructive/10",
              !showResult && "hover:border-primary hover:bg-primary/5"
            )}
            onClick={() => onSelect(option)}
            disabled={disabled}
          >
            <span className="flex-1 text-balance">{option}</span>
            {showResult && isCorrect && (
              <Check className="ml-2 h-5 w-5 shrink-0 text-success" />
            )}
            {showResult && isWrongSelected && (
              <X className="ml-2 h-5 w-5 shrink-0 text-destructive" />
            )}
          </Button>
        )
      })}
    </div>
  )
}
