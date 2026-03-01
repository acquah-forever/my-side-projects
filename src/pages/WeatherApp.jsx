import React, { useState } from 'react'
import { Sun, Cloudy, CloudDrizzle, CloudHail, Snowflake,    } from 'lucide-react'


const WeatherApp = () => {
  const [text, setText] = useState([])
  const [greenBorder, setGreenBorder] = useState(false)
  function handleChange(event) {
    setText(event.target.value)
  }
  function handleNewText(){
    if(!newText.trim()) return
    setGreenBorder(true)
    setTimeout(() => {
      setGreenBorder(false)
    },2000)
  }


  return (
    <div className='mx-auto mt-30 bg-indigo-500 border-2 text-white max-w-90 min-h-100vh p-12 rounded-2xl flex flex-col justify-center items-center'>
      <div className='mb-10 flex items-center space-x-6'>
        <input className={`border-2 p-2 outline-none ${greenBorder ? 'border-green-500' : 'border-black'} rounded-2xl text-white`} onChange={handleChange} placeholder='Enter City' />
        <button className='cursor-pointer border p-2 bg-sky-400 rounded'onClick={handleNewText}>Search</button>
      </div>
      <p>{text}</p>
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
