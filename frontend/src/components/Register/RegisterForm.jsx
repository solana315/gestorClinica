import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Check, Lock, Mail, Phone, User } from 'lucide-react'

export default function RegisterForm() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [accepted, setAccepted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Validar que os termos foram aceites
    if (!accepted) {
      setError('Deve aceitar os Termos e Política de Privacidade para continuar')
      alert('⚠️ É obrigatório aceitar os Termos e Política de Privacidade para criar uma conta.')
      return
    }

    // Validar que as senhas coincidem
    if (password !== confirmPassword) {
      setError('As palavras-passe não coincidem')
      return
    }

    // Validar comprimento mínimo da senha
    if (password.length < 6) {
      setError('A palavra-passe deve ter pelo menos 6 caracteres')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('http://localhost:3001/utilizadores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: name,
          telefone: phone,
          email: email,
          senha: password,
          tipo: 'user'
        }),
      })

      const data = await response.json()

      //notificação pop up
      if (response.ok) {
        alert('Conta criada com sucesso! Por favor, faça login.')
        navigate('/login')
      } else {
        setError(data.message || 'Erro ao criar conta. Tente novamente.')
      }
    } catch (err) {
      console.error('Erro ao registar:', err)
      setError('Erro de conexão. Verifique se o servidor está ativo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      {error && (
        <div style={{ 
          padding: '12px', 
          marginBottom: '16px', 
          backgroundColor: '#fee', 
          border: '1px solid #fcc',
          borderRadius: '6px',
          color: '#c33',
          fontSize: '14px'
        }}>
          {error}
        </div>
      )}

      <div className="register-grid-2">
        <div className="register-field">
          <label className="register-label" htmlFor="register-name">
            Nome
          </label>
          <div className="register-input-wrap">
            <User className="register-input-icon" aria-hidden="true" />
            <input
              id="register-name"
              type="text"
              className="register-input"
              placeholder="O seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </div>
        </div>

        <div className="register-field">
          <label className="register-label" htmlFor="register-phone">
            Telefone
          </label>
          <div className="register-input-wrap">
            <Phone className="register-input-icon" aria-hidden="true" />
            <input
              id="register-phone"
              type="tel"
              className="register-input"
              placeholder="+351 "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              required
            />
          </div>
        </div>
      </div>

      <div className="register-field register-span-2">
        <label className="register-label" htmlFor="register-email">
          E-mail
        </label>
        <div className="register-input-wrap">
          <Mail className="register-input-icon" aria-hidden="true" />
          <input
            id="register-email"
            type="email"
            className="register-input"
            placeholder="nome@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="register-grid-2 register-mt">
        <div className="register-field">
          <label className="register-label" htmlFor="register-password">
            Palavra-passe
          </label>
          <div className="register-input-wrap">
            <Lock className="register-input-icon" aria-hidden="true" />
            <input
              id="register-password"
              type="password"
              className="register-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>
        </div>

        <div className="register-field">
          <label className="register-label" htmlFor="register-confirm-password">
            Confirmar Palavra-passe
          </label>
          <div className="register-input-wrap">
            <Lock className="register-input-icon" aria-hidden="true" />
            <input
              id="register-confirm-password"
              type="password"
              className="register-input"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>
        </div>
      </div>

      <label className="register-terms" htmlFor="register-terms">
        <input
          id="register-terms"
          type="checkbox"
          className="register-terms-input"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          required
        />
        <span className="register-terms-box" aria-hidden="true">
          <Check className="register-terms-check" />
        </span>
        <span className="register-terms-text">Aceito os Termos e Política</span>
      </label>

      <div className="register-divider" role="separator" />

      <div className="register-actions">
        <button
          className="register-secondary"
          type="button"
          onClick={() => navigate('/login')}
          disabled={loading}
        >
          <ArrowLeft className="register-secondary-icon" aria-hidden="true" />
          Voltar para Entrar
        </button>

        <button className="register-primary" type="submit" disabled={loading || !accepted}>
          <Check className="register-primary-icon" aria-hidden="true" />
          {loading ? 'A criar conta...' : 'Criar Conta'}
        </button>
      </div>

      <p className="register-helper">
        Ao criar a conta, concorda com os Termos de Serviço e Política de Privacidade.
      </p>
    </form>
  )
}
