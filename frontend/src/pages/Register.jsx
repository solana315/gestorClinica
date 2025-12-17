import { useState } from 'react'
import '../styles/Register.css'

function Register({ navigateTo }) {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert('As palavras-passe não coincidem!')
      return
    }
    
    if (!formData.acceptTerms) {
      alert('Deve aceitar os Termos e Política!')
      return
    }
    
    console.log('Registro:', formData)
    alert('Conta criada com sucesso!')
    
    // Volta ao Login após criar a conta
    navigateTo('login')
  }

  return (
    <div className="register-container">
      {/* Left Side */}
      <div className="register-left">
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
      <div className="register-right">
        <div className="register-card">
          <div className="form-header">
            <span className="user-icon">👤</span>
            <h2>Criar Conta</h2>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            {/* Nome e Telefone */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <div className="input-wrapper">
                  <span className="input-icon">👤</span>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="O seu nome completo"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <div className="input-wrapper">
                  <span className="input-icon">☎</span>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    placeholder="+351 ___-___-___"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <div className="input-wrapper">
                <span className="input-icon">✉</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="nome@exemplo.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Palavra-passe e Confirmar */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">Palavra-passe</label>
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Palavra-passe</label>
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="terms-section">
              <label className="terms-checkbox">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                />
                <span className="checkmark">✓</span>
                <span className="terms-text">Aceito os Termos e Política</span>
              </label>
            </div>

            {/* Buttons */}
            <div className="button-section">
              <button
                type="button"
                className="back-btn"
                onClick={() => navigateTo('login')}
              >
                <span>←</span> Voltar para Entrar
              </button>
              <button type="submit" className="register-btn">
                <span>✓</span> Criar Conta
              </button>
            </div>

            {/* Footer Text */}
            <p className="footer-text">
              Ao criar a conta, concorda com os Termos de Serviço e Política de Privacidade.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
