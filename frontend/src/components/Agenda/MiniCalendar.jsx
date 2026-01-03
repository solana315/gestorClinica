import React from 'react'
import './Agenda.css'

export default function MiniCalendar({ currentDate, onSelectDate, onPrevMonth, onNextMonth }) {
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const first = new Date(year, month, 1)
  const last = new Date(year, month + 1, 0)
  const daysBefore = first.getDay() === 0 ? 6 : first.getDay() - 1 // start monday

  const cells = []
  for (let i = 0; i < daysBefore; i++) cells.push(null)
  for (let d = 1; d <= last.getDate(); d++) cells.push(new Date(year, month, d))

  return (
    <div className="mc-root">
      <div className="mc-header">
        <button onClick={onPrevMonth} className="mc-nav">&lt;</button>
        <div className="mc-title">{currentDate.toLocaleString(undefined, { month: 'long' })} {year}</div>
        <button onClick={onNextMonth} className="mc-nav">&gt;</button>
      </div>
      <div className="mc-grid">
        {['S','T','Q','Q','S','S','D'].map((h) => <div key={h} className="mc-weekday">{h}</div>)}
        {cells.map((c, i) => (
          <div key={i} className={`mc-cell ${c && c.toDateString() === new Date().toDateString() ? 'today' : ''}`} onClick={() => c && onSelectDate(c)}>
            {c ? c.getDate() : ''}
          </div>
        ))}
      </div>
    </div>
  )
}
