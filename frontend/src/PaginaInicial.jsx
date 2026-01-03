import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'

export default function PaginaInicial() {
	return (
		<div className="dashboard-shell">
			<Sidebar />

			<main className="dashboard-main" aria-label="Painel">
				<header className="dashboard-topbar">
					<div className="dashboard-breadcrumb">Painel <span aria-hidden="true">&gt;</span> João Silva</div>
					<div className="dashboard-user">
						<div className="dashboard-user-avatar" aria-hidden="true" />
						<span className="dashboard-user-name">Dra. Sofia Lima</span>
					</div>
				</header>

				<section className="dashboard-content">
					<div className="dashboard-actions" aria-label="Ações">
						<button type="button" className="dashboard-btn dashboard-btn-ghost">
							<span className="dashboard-btn-icon" aria-hidden="true">⟳</span>
							Atualizar
						</button>
						<button type="button" className="dashboard-btn dashboard-btn-primary">
							<span className="dashboard-btn-icon" aria-hidden="true">＋</span>
							Novo Agendamento
						</button>
					</div>

					<h2 className="dashboard-title">Área principal do dashboard</h2>

					<div className="dashboard-grid">
						<section className="dashboard-card" aria-label="Resumo de Consultas de Hoje">
							<div className="dashboard-card-header">
								<h3 className="dashboard-card-title">Resumo de Consultas de Hoje</h3>
							</div>
							<div className="dashboard-stats">
								<div className="dashboard-stat">
									<div className="dashboard-stat-label">Agendadas</div>
									<div className="dashboard-stat-value">12</div>
								</div>
								<div className="dashboard-stat">
									<div className="dashboard-stat-label">Em andamento</div>
									<div className="dashboard-stat-value">3</div>
								</div>
								<div className="dashboard-stat">
									<div className="dashboard-stat-label">Concluídas</div>
									<div className="dashboard-stat-value">7</div>
								</div>
							</div>
						</section>

						<section className="dashboard-card" aria-label="Agenda do Dia">
							<div className="dashboard-card-header dashboard-card-header-row">
								<h3 className="dashboard-card-title">Agenda do Dia</h3>
								<button type="button" className="dashboard-btn dashboard-btn-light">
									<span className="dashboard-btn-icon" aria-hidden="true">🗓</span>
									Ver agenda
								</button>
							</div>
							<div className="dashboard-agenda">
								<div className="dashboard-agenda-item">
									<div className="dashboard-agenda-left">
										<div className="dashboard-agenda-name">João Silva</div>
										<div className="dashboard-agenda-sub">09:30 • Dra. Sofia Lima</div>
									</div>
									<div className="dashboard-agenda-tag">Check-up</div>
								</div>
								<div className="dashboard-agenda-item">
									<div className="dashboard-agenda-left">
										<div className="dashboard-agenda-name">Maria Ferreira</div>
										<div className="dashboard-agenda-sub">10:15 • Dr. Bruno Costa</div>
									</div>
									<div className="dashboard-agenda-tag">Limpeza</div>
								</div>
								<div className="dashboard-agenda-item">
									<div className="dashboard-agenda-left">
										<div className="dashboard-agenda-name">Carlos Nunes</div>
										<div className="dashboard-agenda-sub">11:00 • Dra. Inês Rocha</div>
									</div>
									<div className="dashboard-agenda-tag">Tratamento</div>
								</div>
							</div>
						</section>
					</div>
				</section>
			</main>
		</div>
	)
}

