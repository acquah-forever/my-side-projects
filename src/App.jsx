import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Todo from './pages/Todo'
import Quiz from './pages/Quiz'
import WeatherApp from './pages/WeatherApp'


const App = () => {
  return (
    <div className='bg-slate-200 dark:bg-slate-600 dark:text-white min-h-screen'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/weatherapp' element={<WeatherApp />} />
      </Routes>
    </div>
  )
}

export default App
