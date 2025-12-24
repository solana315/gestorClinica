import React from 'react'
import './App.css'
import logo from './assets/Logo-CliniMolelos.png'
import LoginForm from './components/Login/LoginForm'
import { useNavigate } from 'react-router-dom'

export default function Login() {
	const navigate = useNavigate()

	const handleLogin = (data) => {
		console.log('Login data:', data)

		// precisa-se validar/autenticar 
		navigate('/pagina-inicial')
	}

	return (
		<div className="login-bg">
			<div className="login-card">
				<img src={logo} alt="Clinimolelos logo" className="login-logo" />
				<LoginForm onSubmit={handleLogin} />
			</div>
		</div>
	)
}

