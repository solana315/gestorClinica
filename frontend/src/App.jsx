import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigateTo = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="app" style={{ width: '100%', height: '100%', minHeight: '100vh' }}>
      {currentPage === 'home' && <Home navigateTo={navigateTo} />}
      {currentPage === 'login' && <Login navigateTo={navigateTo} />}
      {currentPage === 'register' && <Register navigateTo={navigateTo} />}
    </div>
  )
}

export default App
