import Link from 'next/link'
import '@/styles/auth.css'

export default function AuthErrorPage() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Authentication Error</h1>
          <p className="auth-description">
            Something went wrong during authentication. Please try again.
          </p>
        </div>
        <div className="auth-content">
          <Link href="/auth/login" className="auth-button">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  )
}
