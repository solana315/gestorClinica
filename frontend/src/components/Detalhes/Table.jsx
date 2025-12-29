import React from 'react'

const defaultRows = [
  { id: '123', nome: 'JOANA', consulta: 'Branqueamento', estado: 'Estudante', data: '11.06.2019' },
  { id: '456', nome: 'JOANA', consulta: 'Limpeza de cárie', estado: 'Trabalhador', data: '12.02.2019' }
]

export default function Table({ rows }){
  const data = rows && rows.length ? rows : defaultRows

  return (
    <div className="table-wrap">
      <table className="data-table" aria-label="Lista de consultas">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Consultas</th>
            <th>Estado</th>
            <th>Data da consulta</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.nome}</td>
              <td>{row.consulta}</td>
              <td>{row.estado}</td>
              <td>{row.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
