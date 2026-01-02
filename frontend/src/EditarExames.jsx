import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import HeaderAgenda from './components/Agenda/HeaderEditarExames'
import Formulario from './components/Agenda/Formulario'

export default function EditarExames() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="page-layout">
        <HeaderAgenda userName="Joana Oliveira" actionText="Gerir Pacientes" />

        <section className="ve-main">
          <div className="form-row">
            <div className="spacer" />
            <div className="form-panel">
              <Formulario />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
