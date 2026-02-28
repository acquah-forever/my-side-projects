import React, { useState } from 'react'
import { Sun } from 'lucide-react'


const WeatherApp = () => {
  const [text, setText] = useState('')
  const [newText, setNewText] = useState('')
  function handleChange(event) {
    if (!text.trim()) return
    setNewText(event.target.value)
  }
  function handleAdd(){
    setText(newText)
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='text-black dark:text-white max-w-90 h-130 p-12 rounded-2xl flex flex-col justify-center items-center bg-red-300'>
        <div className='mb-12 flex items-center space-x-6'>
          <input className='border p-2 rounded-2xl' onChange={handleChange} value={text} type="text" placeholder='Enter City' />
          <button className='cursor-pointer border p-2 bg-sky-400 rounded'>Search</button>
          <h1>{newText}</h1>
        </div>
        <Sun className='w-15 h-15 mb-10' />
        <h1 className='mb-12 text-5xl'>41C</h1>
        <h1 className='mb-7 text-xl'>Newport</h1>
        <div className='flex space-x-5'>
          <h1 className='text-xl'>Humidity</h1>
          <h1 className='text-xl'>Wind Speed</h1>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
