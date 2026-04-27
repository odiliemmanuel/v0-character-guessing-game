"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { generateQuestion, type CartoonCharacter } from "@/lib/game-data"

export type GameState = "idle" | "playing" | "answered" | "gameover"

export interface GameStats {
  score: number
  streak: number
  bestStreak: number
  questionsAnswered: number
  correctAnswers: number
}

const TIMER_DURATION = 15
const STREAK_BONUS_MULTIPLIER = 10
const BASE_POINTS = 100

export function useGame() {
  const [gameState, setGameState] = useState<GameState>("idle")
  const [currentQuestion, setCurrentQuestion] = useState<{
    character: CartoonCharacter
    options: string[]
  } | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION)
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    streak: 0,
    bestStreak: 0,
    questionsAnswered: 0,
    correctAnswers: 0,
  })

  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const startTimer = useCallback(() => {
    clearTimer()
    setTimeLeft(TIMER_DURATION)
    
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearTimer()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [clearTimer])

  const nextQuestion = useCallback(() => {
    const question = generateQuestion()
    setCurrentQuestion(question)
    setSelectedAnswer(null)
    setGameState("playing")
    startTimer()
  }, [startTimer])

  const startGame = useCallback(() => {
    setStats({
      score: 0,
      streak: 0,
      bestStreak: 0,
      questionsAnswered: 0,
      correctAnswers: 0,
    })
    nextQuestion()
  }, [nextQuestion])

  const handleAnswer = useCallback(
    (answer: string) => {
      if (gameState !== "playing" || selectedAnswer) return

      clearTimer()
      setSelectedAnswer(answer)
      setGameState("answered")

      const isCorrect = answer === currentQuestion?.character.name

      setStats((prev) => {
        const newStreak = isCorrect ? prev.streak + 1 : 0
        const streakBonus = isCorrect ? prev.streak * STREAK_BONUS_MULTIPLIER : 0
        const timeBonus = isCorrect ? Math.floor(timeLeft * 5) : 0
        const pointsEarned = isCorrect ? BASE_POINTS + streakBonus + timeBonus : 0

        return {
          score: prev.score + pointsEarned,
          streak: newStreak,
          bestStreak: Math.max(prev.bestStreak, newStreak),
          questionsAnswered: prev.questionsAnswered + 1,
          correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
        }
      })
    },
    [gameState, selectedAnswer, currentQuestion, clearTimer, timeLeft]
  )

  const handleTimeUp = useCallback(() => {
    if (gameState === "playing") {
      setGameState("answered")
      setStats((prev) => ({
        ...prev,
        streak: 0,
        questionsAnswered: prev.questionsAnswered + 1,
      }))
    }
  }, [gameState])

  const endGame = useCallback(() => {
    clearTimer()
    setGameState("gameover")
  }, [clearTimer])

  useEffect(() => {
    if (timeLeft === 0 && gameState === "playing") {
      handleTimeUp()
    }
  }, [timeLeft, gameState, handleTimeUp])

  useEffect(() => {
    return () => clearTimer()
  }, [clearTimer])

  return {
    gameState,
    currentQuestion,
    selectedAnswer,
    timeLeft,
    stats,
    startGame,
    nextQuestion,
    handleAnswer,
    endGame,
    timerDuration: TIMER_DURATION,
  }
}
