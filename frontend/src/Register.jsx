import React from 'react'
import RegisterForm from './components/Register/RegisterForm.jsx'
import logoClinimolelos from './assets/Logo-CliniMolelos.png'
import './App.css'
import {
	UserPlus,
} from 'lucide-react'


export default function Register() {
    

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
					<RegisterForm />
				</div>
			</section>
		</div>
	)
}

