import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import PaginaInicial from './PaginaInicial'
import EditarDetalhes from './EditarDetalhes'
import VerExames from './VerExames'
import EditarExames from './EditarExames'

function App() {
  return (
    <div className="app">
      <Routes>
        {/* proteger rotas para nao ser acessivel pela barra de pesquisa */}

        <Route path="/login" element={<Login />} />
        <Route path="/pagina-inicial" element={<PaginaInicial />} />
        <Route path="/ver-exames" element={<VerExames />} />
        <Route path="/editar-exames" element={<EditarExames />} />
        <Route path="/editar-detalhes" element={<EditarDetalhes />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  )
}

export default App
