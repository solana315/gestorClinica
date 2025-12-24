import React from 'react'
import '../App.css'

export default function Sidebar() {
  const items = [
    { icon: '📊', label: 'Dashboard' },
    { icon: '🧑‍⚕️', label: 'Gerir Pacientes' },
    { icon: '📅', label: 'Consultas' },
    { icon: '🗓️', label: 'Editar Agenda' },
    { icon: '⚙️', label: 'Alteração de Dados' },
    { icon: '🔒', label: 'Administradores' },
    { icon: '❓', label: 'Help' },
  ]

  return (
    <aside className="sidebar" role="navigation">
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          {items.map((item) => (
            <li className="sidebar-item" key={item.label}>
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">CLINIMOLELOS</div>
    </aside>
  )
}
