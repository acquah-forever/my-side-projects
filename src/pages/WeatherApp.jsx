import React, { useState } from 'react'
import { Sun } from 'lucide-react'


const WeatherApp = () => {
  const [text, setText] = useState([])
  const [newText, setNewText] = useState('')
  const [greenBorder, setGreenBorder] = useState(false)
  function handleChange(event) {
    setNewText(event.target.value)
  }
  function handleNewText(){
    if(!newText.trim()) return
    setText((prevText) => [...prevText,newText])
    setNewText('')
    setGreenBorder(true)
    setTimeout(() => {
      setGreenBorder(false)
    },2000)
  }
  function removeText(index){
    setText(text.filter((_,i) => i !== index))
  }

  return (
    <div className='mx-auto border-2 text-black dark:text-white max-w-90 h-130 p-12 rounded-2xl flex flex-col justify-center items-center'>
      <div className='mb-10 flex items-center space-x-6'>
        <input className={`border-2 p-2 outline-none ${greenBorder ? 'border-green-500' : 'border-black'} rounded-2xl`} onChange={handleChange} value={newText} placeholder='Enter City' />
        <button className='cursor-pointer border p-2 bg-sky-400 rounded'onClick={handleNewText}>Search</button>
      </div>
      <ul>
        {text.map((e,index) => <li key={index}onClick={() => removeText(index)}>{e}</li>)}
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
