'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import '@/styles/auth.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simple demo - just store email in localStorage and redirect
    if (email.trim()) {
      localStorage.setItem('userEmail', email)
      // Use window.location for immediate redirect
      window.location.href = '/'
    }
    
    setIsLoading(false)
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">🎮</div>
          <h1 className="auth-title">Welcome Back!</h1>
          <p className="auth-description">
            Enter your email to play the Cartoon Character Guessing Game
          </p>
        </div>
        
        <div className="auth-content">
          <form onSubmit={handleLogin} className="auth-form">
            <div className="auth-field">
              <label htmlFor="email" className="auth-label">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
              />
            </div>

            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Play Game'}
            </button>
          </form>

          <div className="auth-divider">
            <div className="auth-divider-line"></div>
            <span className="auth-divider-text">or</span>
            <div className="auth-divider-line"></div>
          </div>

          <p style={{ textAlign: 'center', color: '#666', fontSize: '14px', marginBottom: '16px' }}>
            Quick start: Try any email address to get started!
          </p>
        </div>

        <div className="auth-footer">
          <p className="auth-footer-text">
            New here?{' '}
            <Link href="/auth/sign-up" className="auth-footer-link">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
