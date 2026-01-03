import React from 'react'
import './Agenda.css'

const HOUR_START = 8
const HOUR_END = 19
const HOUR_HEIGHT = 40 // px per hour (more compact to ensure 08:00-19:00 fits)

function timeToMinutes(date) {
  return date.getHours() * 60 + date.getMinutes()
}

export default function WeeklyCalendar({ weekStart, appointments = [] }) {
  const days = Array.from({ length: 6 }).map((_, i) => {
    const d = new Date(weekStart)
    d.setDate(weekStart.getDate() + i)
    return d
  })

  // include HOUR_END as the last visible hour (inclusive)
  const totalHours = HOUR_END - HOUR_START + 1
  const gridHeight = totalHours * HOUR_HEIGHT

  return (
    <div className="wc-root">
      <div className="wc-header">
        <div className="wc-time-col" />
        {days.map((d) => (
          <div key={d.toDateString()} className="wc-day-col-header">{d.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric' })}</div>
        ))}
      </div>

      <div className="wc-body" style={{ height: gridHeight }}>
        <div className="wc-time-col">
          {Array.from({ length: totalHours }).map((_, i) => (
            <div key={i} className="wc-time-cell">{String(HOUR_START + i).padStart(2, '0')}:00</div>
          ))}
        </div>

        <div className="wc-days-wrap">
          {days.map((day, dayIndex) => (
            <div key={dayIndex} className="wc-day-col">
              <div className="wc-day-grid" style={{ height: gridHeight }}>
                {/* place appointments for this day */}
                {appointments
                  .filter((a) => {
                    const s = new Date(a.data_inicio)
                    return s.getFullYear() === day.getFullYear() && s.getMonth() === day.getMonth() && s.getDate() === day.getDate()
                  })
                  .map((a) => {
                    const start = new Date(a.data_inicio)
                    const end = new Date(a.data_fim)
                    const minutesFromDayStart = timeToMinutes(start) - HOUR_START * 60
                    const durationMinutes = (end - start) / 60000
                    const top = (minutesFromDayStart / 60) * HOUR_HEIGHT
                    const height = (durationMinutes / 60) * HOUR_HEIGHT
                    const color = a.color || '#c6e9ff'

                    return (
                      <div
                        key={a.id}
                        className="wc-appointment"
                        title={`${a.paciente_nome} — ${a.tipo_consulta}`}
                        style={{ top: top + 'px', height: Math.max(28, height) + 'px', background: color }}
                      >
                        <div className="wc-appointment-title">{a.paciente_nome}</div>
                        <div className="wc-appointment-meta">{new Date(a.data_inicio).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                      </div>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
