import React from 'react'
import Header from './components/header'
import Sidebar from './components/Sidebar/Sidebar'
import FiltrarConsultas from './components/PaginaInicial/FiltrarConsultas'
import './App.css'

export default function PaginaInicial() {
	return (
		<div className="app-container" style={{display: 'flex'}}>
			<Sidebar />
			<main className="page-layout" style={{flex: 1}}>
				<Header userName="Dra. Silvia Coimbra" actionText="Editar Pacientes" />

				<section className="consultas-section">
					<h2 className="consultas-title">Consultas</h2>

					<FiltrarConsultas />
					<p className="consultas-found">Encontrados:</p>
					<div className="table-wrap">
						<table className="data-table" aria-label="Lista de consultas">
							<thead>
								<tr>
									<th>Medico</th>
									<th>Tipo de consulta</th>
									<th>Paciente</th>
									<th>Estado</th>
									<th>Data Inicial</th>
									<th>Data final</th>
									<th>ID Utilizador</th>
								</tr>
							</thead>
							<tbody>
								{/* Conteúdo será carregado do backend — linhas vazias por enquanto */}
							</tbody>
						</table>
					</div>
				</section>
			</main>
		</div>
	)
}

