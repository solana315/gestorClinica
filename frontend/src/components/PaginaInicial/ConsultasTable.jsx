import React from 'react'

export default function ConsultasTable({ data = [] }) {
  return (
    <section className="consultas-table-wrap">
      <div className="consultas-filter">Consultas</div>
      <table className="consultas-table">
        <thead>
          <tr>
            <th>Médico</th>
            <th>Tipo de consulta</th>
            <th>Paciente</th>
            <th>Estado</th>
            <th>Data Inicial</th>
            <th>Data final</th>
            <th>ID Utilizador</th>
          </tr>
        </thead>
        <tbody>
          {/* buscar dados no backend */}
          {data.length === 0 && (
            <tr className="empty-row">
              <td colSpan="7">Sem dados — a lista será carregada do backend.</td>
            </tr>
          )}
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.medico}</td>
              <td>{row.tipo}</td>
              <td>{row.paciente}</td>
              <td>{row.estado}</td>
              <td>{row.dataInicial}</td>
              <td>{row.dataFinal}</td>
              <td>{row.idUtilizador}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
