import React,{ useState } from 'react'
import { X, Menu, Moon, Sun } from 'lucide-react'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [dark, setdark] = useState(false)



  return (
    <div className='py-4 px-7 flex justify-between w-full backdrop-blur-xl'>
      <div className='cursor-pointer flex items-center'>
        <div className="px-4 py-2 bg-orange-500  rounded-lg">
          <h1 className='font-medium text-lg'>k</h1>
        </div>
        <h1 className="text-xl">side<span className='text-2xl bg-linear-to-r from-purple-700 to-emerald-500 text-transparent bg-clip-text'>Projects</span></h1>
      </div>

      <ul className='text-md flex justify-center items-center space-x-5'>
        <li className='cursor-pointer text-white border px-4 py-2 rounded-xl bg-black'>Todo App</li>
        <li className='cursor-pointer text-white border px-4 py-2 rounded-xl bg-black'>Quiz App</li>
        <li className='cursor-pointer text-white border px-4 py-2 rounded-xl bg-black'>Weather App</li>
      </ul>
      <button onClick={() => setOpen(!open)}>{open ? (<X className='w-7 h-7' />) : (<Menu className='w-7 h-7' />)}</button>

    </div>

  )
}

export default NavBar
