import React, { useState } from 'react'
import { X, Menu, Moon, Sun } from 'lucide-react'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)
  function handleDark() {
    document.body.classList.toggle('dark')
    setDark(!dark)
  }

  return (
    <div>
      <div className='py-4 px-7 flex justify-between w-full backdrop-blur-xl'>
        <div className='cursor-pointer flex items-center'>
          <div className="px-4 py-2 bg-orange-500  rounded-lg">
            <h1 className='font-medium text-lg'>k</h1>
          </div>
          <h1 className="text-xl font-light">side<span className='text-2xl bg-linear-to-r from-rose-900 to-slate-500 text-transparent bg-clip-text'>Projects</span></h1>
        </div>
        <ul className='text-md hidden md:flex justify-center items-center space-x-5'>
          <li className='cursor-pointer text-white border px-4 py-2 rounded-xl bg-black'>Todo App</li>
          <li className='cursor-pointer text-white border px-4 py-2 rounded-xl bg-black'>Quiz App</li>
          <li className='cursor-pointer text-white border px-4 py-2 rounded-xl bg-black'>Weather App</li>
        </ul>
        <div className='flex items-center space-x-3'>
          <button className='cursor-pointer flex md:hidden' onClick={() => setOpen(!open)}>{open ? (<X className='w-7 h-7' />) : (<Menu className='w-7 h-7' />)}</button>
          <button className='cursor-pointer hidden md:flex' onClick={handleDark}>{dark ? (<Moon />) : (<Sun />)}</button>
        </div>
      </div>

      {open && (
        <div className='p-4 border rounded-xl mx-7 md:hidden'>
          <ul className='text-lg font-light tracking-tight flex flex-col space-y-2'>
            <li className='cursor-pointer text-black dark:text-white'onClick={() => setOpen(!open)}>Todo App</li>
            <li className='cursor-pointer text-black dark:text-white'onClick={() => setOpen(!open)}>Quiz App</li>
            <li className='cursor-pointer text-black dark:text-white'onClick={() => setOpen(!open)}>Weather App</li>
          </ul>
          <button className='cursor-pointer mt-3 flex md:hidden' onClick={handleDark}>{dark ? (<Moon />) : (<Sun />)}</button>
        </div>
      )}
    </div>

  )
}

export default NavBar
