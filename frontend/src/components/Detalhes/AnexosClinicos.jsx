import React from 'react'

export default function AnexosClinicos() {
  return (
    <div className="patient-section">
      <h2 className="patient-section-title">Anexos Clínicos</h2>
      <p className="patient-section-subtitle">Pré-visualizações com ações seguras</p>
      
      <div className="anexos-grid">
        {/* Radiografia */}
        <div className="anexo-card">
          <div className="anexo-preview">
            <img src="/placeholder-xray.jpg" alt="Radiografia" className="anexo-image" />
          </div>
          <div className="anexo-footer">
            <div className="anexo-info">
              <h3 className="anexo-title">Radiografia</h3>
              <p className="anexo-subtitle">Tórax</p>
            </div>
            <div className="anexo-actions">
              <button className="anexo-btn anexo-btn-view">
                Ver
              </button>
              <button className="anexo-btn anexo-btn-download">
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Exame */}
        <div className="anexo-card">
          <div className="anexo-preview">
            <img src="/placeholder-document.jpg" alt="Exame" className="anexo-image" />
          </div>
          <div className="anexo-footer">
            <div className="anexo-info">
              <h3 className="anexo-title">Exame</h3>
              <p className="anexo-subtitle">Sangue</p>
            </div>
            <div className="anexo-actions">
              <button className="anexo-btn anexo-btn-view">
                Ver
              </button>
              <button className="anexo-btn anexo-btn-download">
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Foto */}
        <div className="anexo-card">
          <div className="anexo-preview">
            <img src="/placeholder-photo.jpg" alt="Foto" className="anexo-image" />
          </div>
          <div className="anexo-footer">
            <div className="anexo-info">
              <h3 className="anexo-title">Foto</h3>
              <p className="anexo-subtitle">Lesão</p>
            </div>
            <div className="anexo-actions">
              <button className="anexo-btn anexo-btn-view">
                Ver
              </button>
              <button className="anexo-btn anexo-btn-download">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
