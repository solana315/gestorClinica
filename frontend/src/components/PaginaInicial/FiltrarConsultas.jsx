import React, { useState } from 'react'

export default function FiltrarConsultas() {
	const [selectedTipo, setSelectedTipo] = useState('Todas')

	const tiposConsulta = [
		'Todas',
		'Aparelho',
		'Geral',
		'Consulta de Avaliação',
		'Consulta de Revisão',
		'Higiene Oral',
		'Consulta de Urgência Dentária',
		'Reavaliação Pós-Tratamento',
		'Restauração',
		'Desvitalização',
		'Reabilitação Oral',
		'Branqueamento Dentário',
        'Outras',
	]

	return (
		<div className="consultas-filter-card">
			<div className="consultas-filter-header">
				<p className="consultas-filter-title">Filtrar Consultas</p>
			</div>

			<div className="consultas-filter-group">
				<span className="consultas-filter-label">Tipo de consulta</span>
				<div className="chip-row">
					{tiposConsulta.map((tipo) => (
						<button
							key={tipo}
							type="button"
							className={`chip ${selectedTipo === tipo ? 'active' : ''}`}
							onClick={() => setSelectedTipo(tipo)}
						>
							{tipo}
						</button>
					))}
				</div>
			</div>

			<div className="consultas-filter-group">
				<span className="consultas-filter-label">Status</span>
				<div className="status-row">
					<label className="status-check">
						<input type="checkbox" defaultChecked />
						<span>Em progresso</span>
					</label>
					<label className="status-check">
						<input type="checkbox" />
						<span>Completo</span>
					</label>
					<label className="status-check">
						<input type="checkbox" />
						<span>Futuras Consultas</span>
					</label>
					<label className="status-check">
						<input type="checkbox" />
						<span>Consultas Anteriores</span>
					</label>
				</div>
			</div>
		</div>
	)
}
