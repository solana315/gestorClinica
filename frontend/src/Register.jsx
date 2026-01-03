import React, { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import {
	ArrowLeft,
	Check,
	Lock,
	Mail,
	Phone,
	User,
	UserPlus,
} from 'lucide-react'

import logoClinimolelos from './assets/Logo-CliniMolelos.png'

export default function Register() {
	const navigate = useNavigate()

	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [accepted, setAccepted] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		// TODO: integrar com backend (criar conta)
		navigate('/login')
	}

	return (
		<div className="register-container">
			<section className="register-left" aria-label="Clinimolelos">
				<div className="register-left-inner">
					<img
						className="register-left-logo"
						src={logoClinimolelos}
						alt="CLINIMOLELOS"
						decoding="async"
						loading="eager"
						draggable="false"
					/>

					<p className="register-left-tagline">
						Aceda ao sistema clínico para gerir Horários,
						Consultas, Pacientes e Faturação.
					</p>
				</div>
			</section>

			<section className="register-right" aria-label="Criar conta">
				<div className="register-card">
					<div className="register-card-header">
						<UserPlus className="register-card-header-icon" />
						<h2 className="register-card-title">Criar Conta</h2>
					</div>

					<form className="register-form" onSubmit={handleSubmit}>
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
										placeholder="+351 ___ ___ ___"
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
							>
								<ArrowLeft className="register-secondary-icon" aria-hidden="true" />
								Voltar para Entrar
							</button>

							<button className="register-primary" type="submit">
								<Check className="register-primary-icon" aria-hidden="true" />
								Criar Conta
							</button>
						</div>

						<p className="register-helper">
							Ao criar a conta, concorda com os Termos de Serviço e Política de Privacidade.
						</p>
					</form>
				</div>
			</section>
		</div>
	)
}

