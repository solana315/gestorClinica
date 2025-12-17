import { useState } from 'react'
import '../styles/Login.css'

function Login({ navigateTo }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Login:', { email, password })
  }

  const handleForgotPassword = () => {
    console.log('Forgot password clicked')
  }

  const handleSignUp = () => {
    console.log('Sign up clicked')
  }

  return (
    <div className="login-container">
      {/* Left Side */}
      <div className="login-left">
        <div className="logo-section">
          <div className="logo-content">
            <div className="logo-icon">m</div>
            <h1>CLINIMOLELOS</h1>
            <p className="tagline">Medicina · Dentária</p>
          </div>
          <p className="description">
            Aceda ao sistema clínico para gerir Horários, Consultas, Pacientes e Faturação.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="login-right">
        <div className="login-card">
          <div className="form-header">
            <span className="arrow">→</span>
            <h2>Entrar na Conta</h2>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <div className="input-wrapper">
                <span className="input-icon">✉</span>
                <input
                  type="email"
                  id="email"
                  placeholder="nome@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Palavra-passe</label>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="forgot-password-section">
              <button
                type="button"
                className="forgot-password-btn"
                onClick={handleForgotPassword}
              >
                <span>🔄</span>
                <span>Recuperar<br />Palavra-passe</span>
              </button>
              <button type="submit" className="login-btn">
                <span>→</span> Entrar
              </button>
            </div>

            <div className="signup-section">
              <p>Ainda não te conta?</p>
              <button
                type="button"
                className="signup-btn"
                onClick={() => navigateTo('register')}
              >
                <span>👤</span> Criar Conta
              </button>
            </div>
          </form>

          <div className="back-link">
            <button 
              type="button" 
              className="back-btn"
              onClick={() => navigateTo('home')}
            >
              ← Voltar à Página Inicial
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
