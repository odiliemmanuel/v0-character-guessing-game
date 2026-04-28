import Link from 'next/link'
import '@/styles/auth.css'

export default function SignUpSuccessPage() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">📧</div>
          <h1 className="auth-title">Check Your Email</h1>
          <p className="auth-description">
            We&apos;ve sent you a confirmation link. Please check your email to verify your account.
          </p>
        </div>
        <div className="auth-content">
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px' }}>
            After confirming your email, you can sign in to play the game.
          </p>
          <Link href="/auth/login" className="auth-button">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  )
}
