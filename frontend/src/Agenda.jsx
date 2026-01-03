import React, { useState, useMemo } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import WeeklyCalendar from './components/Agenda/WeeklyCalendar'
import MiniCalendar from './components/Agenda/MiniCalendar'
import './components/Agenda/Agenda.css'
import './App.css'

function startOfWeek(date) {
  const d = new Date(date)
  const day = d.getDay() // 0 Sun .. 6 Sat
  const diff = (day === 0 ? -6 : 1 - day) // shift to Monday
  d.setDate(d.getDate() + diff)
  d.setHours(0,0,0,0)
  return d
}

export default function Agenda() {
  const [cursorDate, setCursorDate] = useState(new Date())

  const weekStart = useMemo(() => startOfWeek(cursorDate), [cursorDate])

  // constants must match WeeklyCalendar settings
  const HOUR_START = 8
  const HOUR_END = 19
  const HOUR_HEIGHT = 40
  const totalHours = HOUR_END - HOUR_START + 1
  // header for wc (day labels) approx 40px + section paddings (12*2)
  const panelHeight = totalHours * HOUR_HEIGHT + 40 + 24

  const appointments = useMemo(() => {
    const mapToWeek = (idx, hourStart, durationMin, color, name) => {
      const day = new Date(weekStart)
      day.setDate(day.getDate() + idx)
      const start = new Date(day)
      start.setHours(hourStart, 0, 0, 0)
      const end = new Date(start.getTime() + durationMin * 60000)
      return { id: Math.random(), paciente_nome: name, medico_id: 1, data_inicio: start.toISOString(), data_fim: end.toISOString(), tipo_consulta: 'Consulta', color }
    }

    return [
      mapToWeek(0, 11, 60, '#89CFFF', 'João Silva'),
      mapToWeek(2, 10, 30, '#C6E9FF', 'Maria Ferreira'),
      mapToWeek(0, 14, 60, '#7EE7A7', 'Joana Oliveira'),
      mapToWeek(4, 15, 45, '#C6E9FF', 'Paciente X')
    ]
  }, [weekStart])

  function goPrevWeek() {
    const d = new Date(weekStart)
    d.setDate(d.getDate() - 7)
    setCursorDate(d)
  }

  function goNextWeek() {
    const d = new Date(weekStart)
    d.setDate(d.getDate() + 7)
    setCursorDate(d)
  }

  function handleSelectDate(d) {
    setCursorDate(d)
  }

  return (
    <div className="app-container" style={{ display: 'flex' }}>
      <Sidebar />

      <main className="page-layout" style={{ flex: 1, padding: 18 }}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
          <div style={{fontSize:14, color:'#666'}}>Pacientes &gt; João Silva &gt; Agenda</div>
          <div style={{display:'flex', gap:12, alignItems:'center'}}>
            <button onClick={() => {}} className="login-btn" style={{background:'#caa86a', color:'#fff', padding:'8px 12px'}}>＋  Adicionar Consulta</button>
            <div style={{display:'flex', alignItems:'center', gap:8}}>
              <div style={{width:40,height:40,borderRadius:20,background:'#eee'}} aria-hidden="true" />
              <div>Dra. Sofia Lima</div>
            </div>
          </div>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'1fr 300px', gap:18}}>
          <section className="calendar-panel" style={{ minHeight: panelHeight }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
              <div style={{fontWeight:600}}>Agenda Semanal • {weekStart.toLocaleDateString()} - {(new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate()+5)).toLocaleDateString()}</div>
              <div style={{display:'flex', gap:8}}>
                <button className="login-btn" onClick={goPrevWeek}>&lt; Semana Anterior</button>
                <button className="login-btn" onClick={goNextWeek}>Semana Seguinte &gt;</button>
              </div>
            </div>

            <WeeklyCalendar weekStart={weekStart} appointments={appointments} />
          </section>

          <aside style={{display:'flex', flexDirection:'column', gap:12}}>
            <div style={{background:'#fff', padding:12, borderRadius:6}}>
              <MiniCalendar
                currentDate={cursorDate}
                onSelectDate={handleSelectDate}
                onPrevMonth={() => { const d = new Date(cursorDate); d.setMonth(d.getMonth() - 1); setCursorDate(d)}}
                onNextMonth={() => { const d = new Date(cursorDate); d.setMonth(d.getMonth() + 1); setCursorDate(d)}}
              />
            </div>

            <div style={{background:'#fff', padding:12, borderRadius:6}}>
              <div style={{fontWeight:600, marginBottom:8}}>Legenda de Médicos</div>
              <div style={{display:'flex', flexDirection:'column', gap:8}}>
                <div style={{display:'flex', gap:8, alignItems:'center'}}><div style={{width:12,height:12,background:'#C6E9FF',borderRadius:4}}/> Dra. Sofia — Lilás</div>
                <div style={{display:'flex', gap:8, alignItems:'center'}}><div style={{width:12,height:12,background:'#7EE7A7',borderRadius:4}}/> Dr. Marco — Verde Água</div>
                <div style={{display:'flex', gap:8, alignItems:'center'}}><div style={{width:12,height:12,background:'#89CFFF',borderRadius:4}}/> Dr. Alex — Azul Claro</div>
              </div>
            </div>

            <div style={{background:'#fff', padding:12, borderRadius:6}}>
              <div style={{fontWeight:600}}>Dica</div>
              <div style={{marginTop:8, color:'#666'}}>Passe o rato sobre um bloco para ver paciente, tempo de consulta, tipo e estado.</div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
