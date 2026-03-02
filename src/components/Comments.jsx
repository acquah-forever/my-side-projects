import React, { useState } from 'react'
import { ThumbsUp, ThumbsDown, Heart } from 'lucide-react'

const digits = 200
const hackersign = "*"

const Comments = () => {
  const [text, setText] = useState([])
  const [newText, setNewText] = useState('')
  const [wordCount, setWordCount] = useState(digits)
  const [isActive, setIsActive] = useState(false)

  function handleChange(e) {
    const value = e.target.value
    setNewText(value)
    const words = value.trim() === "" ? (0) : (value.trim().split(/\s+/).length)
    setWordCount(digits - words)


  }

  function handleClick() {
    if (!newText.trim()) {
      alert("Please Fill Input Correctly")
      return
    }

    if (newText.trim().includes(hackersign)) {
      alert("Please Ensure Comment Does Not Include '*'")
      return
    }

    (setText((prevText) => [...prevText, newText]))

    setNewText('')
    setWordCount(digits)

    !newText.trim() ? setIsActive(false) : setIsActive(true)

    setTimeout(() => {
      setIsActive(false)
    }, 1000)

  }
  
  function handleDelete(){

  }

  return (
    <div className='p-10 border max-w-3xl h-170'>
      <h1 className="text-3xl text-center font-medium mb-7">INTERACTIVE COMMENT SECTION</h1>
      <div className='flex flex-col'>
        <div className={`border-2 rounded-xl p-1 mb-5 ${isActive ? "border-green-500" : "border-slate-300"}`}>
          <input className='outline-none w-full px-1 py-2' onChange={handleChange} type="text" value={newText} placeholder='Enter comment' />
          <span className='flex justify-end'>{wordCount}</span>
        </div>
        <div className='flex justify-end'>
          <button className={`cursor-pointer ${isActive ? "bg-green-500" : "bg-sky-400"} p-3 w-40  rounded-lg`} onClick={handleClick}>Send Comment</button>
        </div>
      </div>
      <h1>Total Comments: <span>0</span></h1>
      <div className='flex flex-col border mt-7 h-80 px-3 py-5 w-full overflow-y-scroll text-black'>
        <ul>
          {text.map((e, index) =>
            <li className='bg-sky-300 dark:bg-sky-200 rounded-lg w-full mb-3 px-3 py-1' key={index}>{e}
            <div className='flex items-center space-x-2 mt-1'>
              <ThumbsUp className='w-5 h-5' />
              <ThumbsDown className='w-5 h-5' />
              <Heart className='w-5 h-5' />
            </div>
            <div className='flex justify-end'>
            <button className='px-4 py-1 border rounded-lg bg-indigo-400 'onClick={() => handleDelete(index)}>Delete</button>
            </div>
            </li>)}
        </ul>
      </div>
    </div>
  )
}

export default Comments
