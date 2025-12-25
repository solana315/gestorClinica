import React from 'react'
import '../../App.css'
import menuItems from './icons'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <nav className="nav">
          {menuItems.map(item => (
            <button key={item.label} className="nav-link">
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-bottom">CLINIMOLELOS</div>
    </aside>
  )
}
