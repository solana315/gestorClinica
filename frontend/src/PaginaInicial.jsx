import React from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import './App.css'

export default function PaginaInicial() {
	return (
		<div className="page-layout">
			<Header userName="Dra. Silvia Coimbra" actionText="Editar Pacientes" />

			<div className="page-body">
				<Sidebar />

				<main className="page-main">
					<h2>Bem-vindo à Clinica</h2>
					<p>Selecione uma opção na barra lateral para começar.</p>
				</main>
			</div>
		</div>
	)
}

