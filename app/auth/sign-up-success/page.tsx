import Link from 'next/link'
import '@/styles/auth.css'

export default function SignUpSuccessPage() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">✅</div>
          <h1 className="auth-title">Account Created!</h1>
          <p className="auth-description">
            Your account has been created successfully. You can now sign in with your email and password to play!
          </p>
        </div>
        <div className="auth-content">
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px' }}>
            If you received a confirmation email, click the link in it to fully activate your account. Otherwise, you can sign in directly.
          </p>
          <Link href="/auth/login" className="auth-button">
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  )
}
