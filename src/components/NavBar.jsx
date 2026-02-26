import React from 'react'
import { X, Menu, Moon, Sun } from 'lucide-react'

const NavBar = () => {
  return (
    <div className='px-7 flex justify-between w-full backdrop-blur-xl'>
      <div className='flex items-center'>
        <div className="px-4 py-2 bg-orange-500  rounded-lg">
          <h1 className='font-medium text-lg'>k</h1>
        </div>
        <h1 className="text-xl">side<span className='text-2xl bg-linear-to-r from-purple-700 to-emerald-500 text-transparent bg-clip-text'>Projects</span></h1>
      </div>

      <ul>
        <li>Todo App</li>
        <li>Quiz App</li>
        <li>Weather App</li>
      </ul>
      <button></button>
      <button></button>
    </div>

  )
}

export default NavBar
