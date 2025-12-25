import React from 'react'

export const menuItems = [
  {
    label: 'Dashboard',
    icon: (
      <svg className="sidebar-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M3 13h8V3H3v10zM13 21h8v-6h-8v6zM13 3v6h8V3h-8zM3 21h8v-8H3v8z" fill="currentColor"/></svg>
    )
  },
  {
    label: 'Gerir Pacientes',
    icon: (
      <svg className="sidebar-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="8.5" cy="8" r="2.2" fill="currentColor"/><path d="M3 20c0-2.2 2.7-4 5.5-4s5.5 1.8 5.5 4" stroke="currentColor" strokeWidth="1.2" fill="none"/><circle cx="17" cy="9" r="1.8" fill="currentColor"/><path d="M13.5 20c0-1.6 1.8-3 4-3s4 1.4 4 3" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>
    )
  },
  {
    label: 'Consultas',
    icon: (
      <svg className="sidebar-icon" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="7" y="3" width="10" height="2" rx="0.8" fill="currentColor" />
        <path d="M7 5h10a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <rect x="9" y="10" width="6" height="5" rx="0.6" fill="currentColor" />
      </svg>
    )
  },
  {
    label: 'Editar Agenda',
    icon: (
      <svg className="sidebar-icon" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/><path d="M3 10h18" stroke="currentColor" strokeWidth="1.2"/></svg>
    )
  },
  {
    label: 'Editar Histórico',
    icon: (
      <svg className="sidebar-icon" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 2h12v2l-4 4 4 4v2H6v-2l4-4-4-4z" fill="currentColor"/></svg>
    )
  },
  {
    label: 'Alteração de Dados',
    icon: (
      <svg className="sidebar-icon" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="6" ry="2.5" fill="currentColor" />
        <ellipse cx="12" cy="11" rx="6" ry="2.5" fill="currentColor" />
        <ellipse cx="12" cy="17" rx="6" ry="2.5" fill="currentColor" />
      </svg>
    )
  },
  {
    label: 'Administradores',
    icon: (
      <svg className="sidebar-icon" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none"/><path d="M7 7V5h2v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M17 7V5h2v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><rect x="6" y="11" width="4" height="4" fill="currentColor"/></svg>
    )
  },
  {
    label: 'Help',
    icon: (
      <svg className="sidebar-icon" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1 .45-1.5 1.17-2.22l1.24-1.26c.37-.36.59-.86.59-1.42 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" fill="currentColor"/></svg>
    )
  }
]

export default menuItems
