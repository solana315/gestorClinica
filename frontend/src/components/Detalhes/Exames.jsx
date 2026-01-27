import React from 'react'

export default function Exames() {
  return (
    <div className="patient-section">
      <h2 className="patient-section-title">Exames e Testes</h2>
      
      {/* Exame laboratorial */}
      <div className="patient-card patient-card-inline">
        <div className="patient-card-content-space">
          <div className="patient-card-body">
            <h3 className="patient-card-title">Exame laboratorial</h3>
            <p className="patient-card-meta">02/04/2025 • Dra. Sofia Lima</p>
            <p className="patient-card-text">Resumo: Hemograma completo dentro dos parâmetros.</p>
          </div>
          <button className="patient-card-tag">
            Exame
          </button>
        </div>
      </div>

      {/* Imagem radiográfica */}
      <div className="patient-card">
        <div className="patient-card-content-space">
          <div className="patient-card-body">
            <h3 className="patient-card-title">Imagem radiográfica adicionada</h3>
            <p className="patient-card-meta">18/01/2025 • Dr. Rui Matos</p>
            <p className="patient-card-text">Resumo: RX coluna — sem fraturas.</p>
          </div>
          <button className="patient-card-tag">
            Imagem
          </button>
        </div>
      </div>
    </div>
  )
}
