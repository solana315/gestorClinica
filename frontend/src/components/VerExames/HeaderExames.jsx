import React from 'react'
import '../../App.css'

export default function Header({ userName = 'Pedro Saraiva', actionText = 'Editar Pacientes' }) {
    return (
        <header className="top-bar">
            <div className="top-bar-left">
                <div className="top-bar-icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="top-bar-text">
                    <div className="top-title">Gestor</div>
                    <div className="top-sub">{userName}</div>
                </div>
            </div>
            <div className="top-bar-right">{actionText}</div>
        </header>
    )
}

