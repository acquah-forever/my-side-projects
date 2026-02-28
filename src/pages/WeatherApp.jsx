import React from 'react'
import { Search,Sun } from 'lucide-react'


const WeatherApp = () => {
  return (
    <div className='flex justify-center items-center'>
    <div className='max-w-70 h-110 p-12 rounded-2xl flex flex-col justify-center items-center bg-red-300'>
      <div className='mb-12 flex items-center space-x-4'>
       <input className='border p-2 rounded-2xl' type="text" placeholder='Enter City' />
       <Search />
      </div>
       <Sun className='mb-10' />
       <h1 className='mb-12'>41C</h1>
       <h1 className='mb-7'>Newport</h1>
       <div className='flex space-x-5'>
       <h1>Humidity</h1>
       <h1>Wind Speed</h1>
       </div>
    </div>
    </div>
  )
}

export default WeatherApp
