import React from 'react'
import Header from './components/header'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'
import Table from './components/Detalhes/Table'

export default function EditarDetalhes(){
  return (
    <div className="app-container" style={{display: 'flex'}}>
      <Sidebar />

      <main className="page-layout" style={{flex: 1}}>
        <Header userName="Editar detalhes do Cliente" actionText="" />

        <div className="page-main" style={{display: 'flex', gap: 24}}>
          <section style={{flex: 1}}>
            <h2 className="consultas-title">Editar detalhes do Cliente</h2>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 20}}>
              <div>
                <label className="login-label">Nome</label>
                <input className="login-input" defaultValue="Joana" />
              </div>

              <div>
                <label className="login-label">Apelido</label>
                <input className="login-input" defaultValue="Oliveira" />
              </div>

              <div>
                <label className="login-label">Data de nascimento</label>
                <input className="login-input" defaultValue="14/10/1998" />
              </div>

              <div>
                <label className="login-label">Morada</label>
                <input className="login-input" defaultValue="Portugal, Viseu" />
              </div>

              <div>
                <label className="login-label">Status histórico</label>
                <input className="login-input" defaultValue="Ativo — 13/05/2009" />
              </div>

              <div>
                <label className="login-label">Login</label>
                <input className="login-input" defaultValue="Paciente" />
              </div>

              <div>
                <label className="login-label">Estatuto</label>
                <input className="login-input" defaultValue="Trabalhador" />
              </div>
            </div>

            <h3 className="consultas-title">Consultas</h3>
            <Table />
          </section>

          <aside style={{width: 260}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div style={{width:96, height:96, borderRadius: '50%', background:'#ddd', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:12}}> </div>
              <h4>Joana Oliveira</h4>

              <div style={{marginTop:12, textAlign:'left', width: '100%'}}>
                <p style={{margin:'8px 0'}}> abcd@gmail.com</p>
                <p style={{margin:'8px 0'}}> Agenda</p>
                <p style={{margin:'8px 0'}}> 937547920</p>
                <p style={{margin:'8px 0'}}> Corporate CV</p>
              </div>

              <div style={{marginTop:20, display:'flex', gap:12, width:'100%'}}>
                <button className="login-btn" style={{flex:1, background:'#caa86a'}}>Voltar</button>
                <button className="login-btn" style={{flex:1, background:'#f6b844'}}>Confirmar</button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
