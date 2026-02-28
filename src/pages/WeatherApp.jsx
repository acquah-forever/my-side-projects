import React from 'react'
import { Search,Sun } from 'lucide-react'


const WeatherApp = () => {
  return (
    <div className='max-w-80 h-100 rounded-2xl flex flex-col justify-center items-center bg-red-300'>
      <div className='flex items-center space-x-4'>
       <input className='border p-2 rounded-2xl' type="text" placeholder='Enter City' />
       <Search />
      </div>
       <Sun />
       <h1>41C</h1>
       <h1>Newport</h1>
       <h1>Humidity</h1>
       <h1>Wind Speed</h1>
    </div>
  )
}

export default WeatherApp
