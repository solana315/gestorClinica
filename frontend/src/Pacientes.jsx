import React, { useMemo, useState } from 'react'
import './App.css'
import {
	Calendar,
	ClipboardList,
	Eye,
	LayoutDashboard,
	LogOut,
	Pencil,
	Search,
	Stethoscope,
	Trash2,
	Users,
	UserRound,
} from 'lucide-react'

import logoClinimolelos from './assets/Logo-CliniMolelos.png'

export default function Pacientes() {
	const [query, setQuery] = useState('')

	const rows = useMemo(
		() => [
			{
				id: 'P001',
				nome: 'Maria Gonzalez',
				email: 'maria.gonzalez@example.com',
				estado: 'Ativo',
			},
			{
				id: 'P002',
				nome: 'Liam Chen',
				email: 'liam.chen@example.com',
				estado: 'Inativo',
			},
			{
				id: 'P003',
				nome: 'Sofia Martins',
				email: 'sofia.martins@example.com',
				estado: 'Ativo',
			},
			{
				id: 'P004',
				nome: 'Noah Patel',
				email: 'noah.patel@example.com',
				estado: 'Ativo',
			},
		],
		[],
	)

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase()
		if (!q) return rows
		return rows.filter((r) => {
			return (
				r.nome.toLowerCase().includes(q) ||
				r.email.toLowerCase().includes(q) ||
				r.id.toLowerCase().includes(q)
			)
		})
	}, [query, rows])

	return (
		<div className="patients-shell">
			<aside className="patients-sidebar" aria-label="Navegação">
				<div className="patients-sidebar-top">
					<div className="patients-logo">
						<img
							className="patients-logo-img"
							src={logoClinimolelos}
							alt="Clinimolelos"
							decoding="async"
							loading="eager"
							draggable="false"
						/>
					</div>

					<nav className="patients-nav" aria-label="Menu">
						<button className="patients-nav-item" type="button">
							<LayoutDashboard className="patients-nav-icon" aria-hidden="true" />
							<span>Painel</span>
						</button>
						<button className="patients-nav-item" type="button">
							<Calendar className="patients-nav-icon" aria-hidden="true" />
							<span>Horário</span>
						</button>
						<button className="patients-nav-item" type="button">
							<ClipboardList className="patients-nav-icon" aria-hidden="true" />
							<span>Consultas</span>
						</button>
						<button className="patients-nav-item is-active" type="button">
							<Users className="patients-nav-icon" aria-hidden="true" />
							<span>Pacientes</span>
						</button>
						<button className="patients-nav-item" type="button">
							<Stethoscope className="patients-nav-icon" aria-hidden="true" />
							<span>Colaboradores</span>
						</button>
					</nav>
				</div>

				<div className="patients-sidebar-bottom">
					<button className="patients-logout" type="button">
						<LogOut className="patients-logout-icon" aria-hidden="true" />
						Terminar Sessão
					</button>
				</div>
			</aside>

			<div className="patients-main">
				<header className="patients-header" aria-label="Topo">
					<div className="patients-breadcrumb">Pacientes &gt; João Silva</div>
					<div className="patients-profile">
						<div className="patients-profile-img" aria-hidden="true">
							<UserRound className="patients-profile-icon" />
						</div>
						<div className="patients-profile-name">Dra. Sofia Lima</div>
					</div>
				</header>

				<main className="patients-content" aria-label="Conteúdo">
					<div className="patients-title-row">
						<div className="patients-title">
							<Users className="patients-title-icon" aria-hidden="true" />
							<h1>Pacientes</h1>
						</div>

						<div className="patients-search">
							<Search className="patients-search-icon" aria-hidden="true" />
							<input
								type="text"
								className="patients-search-input"
								placeholder="Pesquisar por nome, email ou ID"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								aria-label="Pesquisar pacientes"
							/>
						</div>
					</div>

					<section className="patients-card" aria-label="Lista de pacientes">
						<div className="patients-table-wrap">
							<table className="patients-table">
								<thead>
									<tr>
										<th>Nome</th>
										<th>Email</th>
										<th>Estado</th>
										<th className="patients-actions-col">Ações</th>
									</tr>
								</thead>
								<tbody>
									{filtered.map((r) => (
										<tr key={r.id}>
											<td className="patients-name">{r.nome}</td>
											<td className="patients-email">{r.email}</td>
											<td>
												<span
													className={
														r.estado === 'Ativo'
															? 'patients-badge is-active'
															: 'patients-badge is-inactive'
													}
												>
													{r.estado}
												</span>
											</td>
											<td className="patients-actions">
												<button className="patients-action" type="button">
													<Eye className="patients-action-icon" aria-hidden="true" />
													Ver
												</button>
												<button className="patients-action" type="button">
													<Pencil className="patients-action-icon" aria-hidden="true" />
													Editar
												</button>
												<button className="patients-action" type="button">
													<Trash2 className="patients-action-icon" aria-hidden="true" />
													Eliminar
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</section>

					<button className="patients-fab" type="button" aria-label="Novo paciente">
						<span className="patients-fab-plus" aria-hidden="true">
							+
						</span>
						Novo Paciente
					</button>
				</main>
			</div>
		</div>
	)
}
