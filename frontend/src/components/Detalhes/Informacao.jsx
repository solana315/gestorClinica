import React from 'react'

export default function Informacao({ isEditing, data, onChange }) {
  return (
    <div className="patient-section">
      <h2 className="patient-section-title">Informações Gerais</h2>
      <p className="patient-section-subtitle">
        {isEditing ? 'Editar dados do paciente' : 'Dados principais do paciente (modo leitura)'}
      </p>
      
      <div className="patient-info-table">
        <div className="patient-info-row">
          <div className="patient-info-label">Nome completo</div>
          {isEditing ? (
            <input 
              className="patient-info-input"
              value={data.nomeCompleto}
              onChange={(e) => onChange('nomeCompleto', e.target.value)}
            />
          ) : (
            <div className="patient-info-value">{data.nomeCompleto}</div>
          )}
        </div>
        <div className="patient-info-row">
          <div className="patient-info-label">Data de nascimento</div>
          {isEditing ? (
            <input 
              className="patient-info-input"
              type="date"
              value={data.dataNascimento.split('/').reverse().join('-')}
              onChange={(e) => onChange('dataNascimento', e.target.value.split('-').reverse().join('/'))}
            />
          ) : (
            <div className="patient-info-value">{data.dataNascimento}</div>
          )}
        </div>
        <div className="patient-info-row">
          <div className="patient-info-label">Nº de Utente / NIF</div>
          {isEditing ? (
            <div className="patient-info-input-group">
              <input 
                className="patient-info-input patient-info-input-half"
                placeholder="Nº Utente"
                value={data.numeroUtente}
                onChange={(e) => onChange('numeroUtente', e.target.value)}
              />
              <input 
                className="patient-info-input patient-info-input-half"
                placeholder="NIF"
                value={data.nif}
                onChange={(e) => onChange('nif', e.target.value)}
              />
            </div>
          ) : (
            <div className="patient-info-value">Utente: {data.numeroUtente} • NIF: {data.nif}</div>
          )}
        </div>
        <div className="patient-info-row">
          <div className="patient-info-label">Contactos</div>
          {isEditing ? (
            <div className="patient-info-input-group">
              <input 
                className="patient-info-input patient-info-input-half"
                placeholder="Telefone"
                value={data.telefone}
                onChange={(e) => onChange('telefone', e.target.value)}
              />
              <input 
                className="patient-info-input patient-info-input-half"
                placeholder="Email"
                type="email"
                value={data.email}
                onChange={(e) => onChange('email', e.target.value)}
              />
            </div>
          ) : (
            <div className="patient-info-value">{data.telefone} • {data.email}</div>
          )}
        </div>
        <div className="patient-info-row">
          <div className="patient-info-label">Data de registo</div>
          <div className="patient-info-value">{data.dataRegisto}</div>
        </div>
      </div>
    </div>
  )
}
