import React from 'react'
import '../../App.css'
import menuItems from './icons'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-brand" aria-label="Clinimolelos">
          <div className="sidebar-brand-mark" aria-hidden="true">m</div>
          <div className="sidebar-brand-text">Clinimolelos</div>
        </div>

        <nav className="nav" aria-label="Navegação">
          {menuItems.map((item, idx) => (
            <button
              key={item.label}
              className={`nav-link${idx === 0 ? ' is-active' : ''}`}
              type="button"
              aria-current={idx === 0 ? 'page' : undefined}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <button type="button" className="sidebar-logout">
        Terminar Sessão
      </button>
    </aside>
  )
}
