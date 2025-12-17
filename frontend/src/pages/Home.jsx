import { useState } from 'react'
import '../styles/Home.css'

export default function Home({ navigateTo }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Mensagem enviada:', formData)
    setFormData({ nome: '', email: '', mensagem: '' })
  }

  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h1>Clinimolelos</h1>
          </div>
          <nav className="nav">
            <a href="#inicio">Início</a>
            <a href="#equipas">Equipas</a>
            <a href="#contactos">Contactos</a>
          </nav>
          <button className="btn-login" onClick={() => navigateTo('login')}>Iniciar Sessão</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="subtitle">Portal do Paciente</p>
            <h2>A SUA SAÚDE DENTÁRIA NA<br/>PALMA DA SUA MÃO</h2>
            <p className="description">Faça a gestão das suas consultas, receba alertas e acompanhe o seus tratamentos através da nossa app simples e segura.</p>
            <div className="download-buttons">
              <button className="btn-app">
                <span>📱</span> Descarregar App
              </button>
              <button className="btn-google">
                <span>🔍</span> Google Play
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1631217065207-7a5d0d0ac3c5?w=600&h=500&fit=crop" alt="Dentista" />
          </div>
        </div>
      </section>

      {/* Sobre a App */}
      <section className="about">
        <div className="about-container">
          <h3>Sobre a App</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h4>Agende consultas facilmente</h4>
              <p>Marque consultas com o seu médico/clínico em segundos.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h4>Receba lembretes automáticos</h4>
              <p>Nunca mais perda uma consulta com notificações antes para não perder a sua.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍⚕️</div>
              <h4>Acompanhe seu tratamento</h4>
              <p>Histórico e evolução sempre consigo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipa */}
      <section id="equipas" className="team">
        <div className="team-container">
          <h3>Conheça a nossa equipa de especialistas</h3>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1612349317150-e539c59dc09a?w=300&h=350&fit=crop" alt="Dr. Diogo Caicolo" />
              </div>
              <h5>Dr. Diogo Caicolo</h5>
              <p className="specialty">Estomatologia</p>
              <p className="registration">OM nº 9540</p>
              <a href="#" className="ver-perfil">Ver perfil</a>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=350&fit=crop" alt="Dra. Sílvia Coimbra" />
              </div>
              <h5>Dra. Sílvia Coimbra</h5>
              <p className="specialty">Dentística Clínica</p>
              <p className="registration">OM nº 5170</p>
              <a href="#" className="ver-perfil">Ver perfil</a>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=350&fit=crop" alt="Dra. Melissa Sousa Pinto" />
              </div>
              <h5>Dra. Melissa Sousa Pinto</h5>
              <p className="specialty">Dentária Geral/Dentária</p>
              <p className="registration">OM nº 17756</p>
              <a href="#" className="ver-perfil">Ver perfil</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contactos */}
      <section id="contactos" className="contact">
        <div className="contact-container">
          <h3>Contactos e Localização</h3>
          <div className="contact-content">
            <div className="contact-info">
              <h4>Clinimolelos</h4>
              <p><strong>Av. Dr. Adriano Figueirede 158, 3480-900 Tondela</strong></p>
              <p><strong>Telefone:</strong> +351 232 823 220</p>
              <p><strong>Email:</strong> geral@clinimolelos.pt</p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    placeholder="Mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-submit">Enviar</button>
              </form>
            </div>
            <div className="contact-map">
              <iframe 
                title="Localização Clinimolelos"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.0123456789!2d-7.5!3d40.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2273c4c4c4c4d%3A0x4c4c4c4c4c4c4c4c!2sAv.%20Dr.%20Adriano%20Figueirede%20158%2C%203480-900%20Tondela!5e0!3m2!1spt-PT!2spt!4v123456789"
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Clinimolelos. Todos os direitos reservados • <a href="#">Política de Privacidade</a></p>
          <div className="social-links">
            <a href="#" title="Facebook">f</a>
            <a href="#" title="Instagram">📷</a>
            <a href="#" title="LinkedIn">in</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
