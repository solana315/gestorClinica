import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import PaginaInicial from './PaginaInicial'

function App() {
  return (
    <div className="app">
      <Routes>
        {/* proteger rotas para nao ser acessivel pela barra de pesquisa */}

        <Route path="/login" element={<Login />} />
        <Route path="/pagina-inicial" element={<PaginaInicial />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  )
}

export default App
