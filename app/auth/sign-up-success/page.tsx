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
            Your account has been created successfully. Let&apos;s play!
          </p>
        </div>
        <div className="auth-content">
          <Link href="/" className="auth-button">
            Start Playing
          </Link>
        </div>
      </div>
    </div>
  )
}
