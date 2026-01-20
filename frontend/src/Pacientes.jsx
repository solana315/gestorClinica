import React, { useMemo, useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
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
	const navigate = useNavigate()
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
			<Sidebar />

			<div className="patients-main">
				<header className="patients-header" aria-label="Topo">
					<div className="patients-breadcrumb">Pacientes </div>
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
												<button 
													className="patients-action" 
													type="button"
													onClick={() => navigate('/editar-detalhes')}
												>
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

					<button 
						className="patients-fab" 
						type="button" 
						aria-label="Novo paciente"
						onClick={() => navigate('/registar')}
					>
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
