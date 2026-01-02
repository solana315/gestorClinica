import React from 'react'
import '../../App.css'
import { useNavigate } from 'react-router-dom'

export default function Header({ actionText = 'Editar Agenda', userName = 'Joana Oliveira' }) {
    const navigate = useNavigate()

    function handleBack() {
        if (window.history.length > 1) navigate(-1)
        else navigate('/editar-detalhes')
    }

    return (
        <header className="top-bar">
            <div className="top-bar-left">
                <button className="top-bar-icon" aria-label="Voltar" onClick={handleBack}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className="top-bar-text">
                    <div className="top-sub">{userName}</div>
                </div>
            </div>
            <div className="top-bar-right">{actionText}</div>
        </header>
    )
}

