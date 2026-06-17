"use client";

import { useState, useEffect, useCallback } from 'react';
import { characters, shuffleArray, generateOptions } from '@/lib/gameData';

const TIMER_DURATION = 15;
const BASE_POINTS = 100;
const TIME_BONUS_MULTIPLIER = 5;
const STREAK_BONUS = 10;
const TOTAL_QUESTIONS = 10;

export function useGame() {
  const [gameState, setGameState] = useState('start'); // 'start', 'playing', 'gameOver'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Initialize questions when game starts
  const initializeGame = useCallback(() => {
    const shuffledCharacters = shuffleArray(characters).slice(0, TOTAL_QUESTIONS);
    const gameQuestions = shuffledCharacters.map(character => ({
      character,
      options: generateOptions(character, characters)
    }));
    setQuestions(gameQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setCorrectAnswers(0);
    setTimeLeft(TIMER_DURATION);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowFeedback(false);
    setGameState('playing');
  }, []);

  // Timer effect
  useEffect(() => {
    if (gameState !== 'playing' || showFeedback) return;

    if (timeLeft <= 0) {
      handleTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, timeLeft, showFeedback]);

  // Handle timeout
  const handleTimeout = useCallback(() => {
    setIsCorrect(false);
    setShowFeedback(true);
    setStreak(0);

    setTimeout(() => {
      moveToNextQuestion();
    }, 2000);
  }, [currentQuestion]);

  // Handle answer selection
  const handleAnswer = useCallback((answer) => {
    if (selectedAnswer !== null || showFeedback) return;

    const currentChar = questions[currentQuestion]?.character;
    const correct = answer === currentChar?.name;

    setSelectedAnswer(answer);
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      const timeBonus = timeLeft * TIME_BONUS_MULTIPLIER;
      const streakBonus = streak * STREAK_BONUS;
      const points = BASE_POINTS + timeBonus + streakBonus;
      
      setScore(prev => prev + points);
      setStreak(prev => prev + 1);
      setCorrectAnswers(prev => prev + 1);
      setBestStreak(prev => Math.max(prev, streak + 1));
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      moveToNextQuestion();
    }, 2000);
  }, [selectedAnswer, showFeedback, questions, currentQuestion, timeLeft, streak]);

  // Move to next question
  const moveToNextQuestion = useCallback(() => {
    if (currentQuestion + 1 >= TOTAL_QUESTIONS) {
      setGameState('gameOver');
    } else {
      setCurrentQuestion(prev => prev + 1);
      setTimeLeft(TIMER_DURATION);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowFeedback(false);
    }
  }, [currentQuestion]);

  // Start new game
  const startGame = useCallback(() => {
    initializeGame();
  }, [initializeGame]);

  // Restart game
  const restartGame = useCallback(() => {
    initializeGame();
  }, [initializeGame]);

  return {
    gameState,
    currentQuestion,
    totalQuestions: TOTAL_QUESTIONS,
    score,
    streak,
    bestStreak,
    correctAnswers,
    timeLeft,
    maxTime: TIMER_DURATION,
    questions,
    selectedAnswer,
    isCorrect,
    showFeedback,
    startGame,
    restartGame,
    handleAnswer
  };
}
