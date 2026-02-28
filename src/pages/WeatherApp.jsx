import React, { useState } from 'react'
import { Sun } from 'lucide-react'


const WeatherApp = () => {
  const [text, setText] = useState([])
  const [newText, setNewText] = useState('')
  function handleChange(event) {
    setNewText(event.target.value)
  }
  function handleNewText(){
    setText(newText)
  }

  return (
    <div className='mx-auto text-black dark:text-white max-w-90 h-130 p-12 rounded-2xl flex flex-col justify-center items-center bg-red-300'>
      <div className='mb-10 flex items-center space-x-6'>
        <input className='border p-2 outline-none rounded-2xl' onChange={handleChange} placeholder='Enter City' />
        <button className='cursor-pointer border p-2 bg-sky-400 rounded'onClick={handleNewText}>Search</button>
      </div>
      <ul>
        {text.map((e,index) => <li key={index}>{e}</li>)}
      </ul>
      <Sun className='w-15 h-15 mb-10' />
      <h1 className='mb-12 text-5xl'>41C</h1>
      <h1 className='mb-7 text-xl'>Newport</h1>
      <div className='flex space-x-5'>
        <h1 className='text-xl'>Humidity</h1>
        <h1 className='text-xl'>Wind Speed</h1>
      </div>
    </div>
  )
}

export default WeatherApp
