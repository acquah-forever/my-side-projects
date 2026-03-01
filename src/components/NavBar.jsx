import React, { useState } from 'react'
import { X, Menu, Moon, Sun } from 'lucide-react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  
  function handleDark() {
    document.body.classList.toggle('dark')
    setDark(!dark)
  }

  return (
    <div>
      <div className='py-4 px-7 flex justify-between items-center w-full backdrop-blur-xl'>
        <NavLink to={'/'}>
          <div className='cursor-pointer flex items-center space-x-2'>
          <div className="px-4 py-2 bg-orange-500  rounded-lg">
            <h1 className='font-medium text-lg'>k</h1>
          </div>
          <h1 className="text-xl text-black dark:text-white font-light">side<span className='text-2xl font-medium bg-linear-to-r from-blue-700 to-cyan-500 text-transparent bg-clip-text'>Projects</span></h1>
        </div>
          </NavLink>
        <ul className='text-md  hidden md:flex space-x-5'>
          <NavLink to={'/todo'}><li className='cursor-pointer dark:text-white text-black rounded-xl'>Todo App</li></NavLink>
          <NavLink to={'/quiz'}><li className='cursor-pointer dark:text-white text-black rounded-xl'>Quiz App</li></NavLink>
          <NavLink to={'/weatherapp'}><li className='cursor-pointer dark:text-white text-black rounded-xl'>Weather App</li></NavLink>
          <NavLink to={'/wordcounter'}><li className='cursor-pointer dark:text-white text-black rounded-xl'>Word Counter</li></NavLink>

        </ul>
        <div className='flex items-center space-x-3'>
          <button className='cursor-pointer flex md:hidden' onClick={() => setOpen(!open)}>{open ? (<X className='w-6 h-6' />) : (<Menu className='w-6 h-6' />)}</button>
          <button className='cursor-pointer hidden md:flex' onClick={handleDark}>{dark ? (<Moon className='text-black dark:text-white' />) : (<Sun className='text-black dark:text-white' />)}</button>
        </div>
      </div>

      {open && (
        <div className='p-4 border rounded-xl mx-7 md:hidden'>
          <ul className='text-lg font-light tracking-tight flex flex-col space-y-2'>
            <NavLink to={'/todo'}><li className='cursor-pointer text-black dark:text-white'onClick={() => setOpen(!open)}>Todo App</li></NavLink>
            <NavLink to={'/quiz'}><li className='cursor-pointer text-black dark:text-white'onClick={() => setOpen(!open)}>Quiz App</li></NavLink>
            <NavLink to={'/weatherapp'}><li className='cursor-pointer text-black dark:text-white'onClick={() => setOpen(!open)}>Weather App</li></NavLink>
            <NavLink to={'/wordcounter'}><li className='cursor-pointer text-black dark:text-white'onClick={() => setOpen(!open)}>Word Counter</li></NavLink>

          </ul>
          <button className='cursor-pointer mt-3 flex md:hidden' onClick={handleDark}>{dark ? (<Moon className='text-black dark:text-white' />) : (<Sun className='text-black dark:text-white'  />)}</button>
        </div>
      )}
    </div>

  )
}

export default NavBar
