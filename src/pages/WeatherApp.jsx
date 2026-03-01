import React, { useEffect, useState } from 'react'
import { Search, Sun, Cloudy, CloudDrizzle, CloudHail, Snowflake, Wind, WindArrowDown } from 'lucide-react'


const WeatherApp = () => {
  const [text, setText] = useState([])
  const [greenBorder, setGreenBorder] = useState(false)
  function handleChange(event) {
    setText(event.target.value)
  }
  function handleNewText() {
    if (!newText.trim()) return
    setGreenBorder(true)
    setTimeout(() => {
      setGreenBorder(false)
    }, 2000)
  }

  const search = async(city)=>{
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`)
      const data = await response.json()
      console.log(data)

    } catch (error) {

    }
  }

  useEffect(() => {
    search("London")
  },[])


  return (
    <div className='mx-auto mt-30 bg-indigo-500 border-2 text-white max-w-90 min-h-100vh p-12 rounded-2xl flex flex-col justify-center items-center'>
      <div className='mb-10 flex items-center space-x-3'>
        <input className={`border-2 p-2 outline-none ${greenBorder ? 'border-green-500' : 'border-white'} rounded-2xl text-white`} onChange={handleChange} placeholder='Enter City' />
        <Search />
      </div>
      <p>{text}</p>
      <Sun className='w-15 h-15 mb-10' />
      <h1 className='mb-7 text-5xl'>8°c</h1>
      <h1 className='mb-10 text-5xl'>Bristol</h1>
      <div className='flex justify-center items-center gap-10'>
        <div className='flex flex-col' >
          <Wind />
          <p className='text-lg'>5.2 km/h</p>
          <p className='text-lg'>Wind Speed</p>
        </div>

        <div>
          <WindArrowDown />
          <p className='text-lg'>77%</p>
          <p className='text-lg'>Humidity</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
