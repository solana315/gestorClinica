import { useState } from 'react'
import '../styles/Login.css'

function Login() {
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
      <div className="login-left">
        <div className="logo-section">
          <img src={clinimolelosLogo} alt="Clinimolelos" className="logo" />
          <h1>CLINIMOLELOS</h1>
          <p className="tagline">Medicina · Dentária</p>
          <p className="description">
            Aceda ao sistema clínico para gerir Horários,<br />
            Consultas, Pacientes e Faturação.
          </p>
        </div>
      </div>

      <div className="login-right">
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-header">
            <span className="arrow">→</span>
            <h2>Entrar na Conta</h2>
          </div>

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
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="forgot-password-section">
            <label className="forgot-password-label">
              <span className="icon">🔄</span>
              <button
                type="button"
                className="forgot-password-btn"
                onClick={handleForgotPassword}
              >
                Recuperar<br />Palavra-passe
              </button>
            </label>
            <button type="submit" className="login-btn">
              <span className="arrow">→</span>Entrar
            </button>
          </div>

          <div className="signup-section">
            <p>Ainda não tem conta?</p>
            <button
              type="button"
              className="signup-btn"
              onClick={handleSignUp}
            >
              <span className="icon">👤</span>Criar Conta
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
