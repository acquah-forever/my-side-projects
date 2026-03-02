import React, { useState } from 'react'

const digits = 200

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
    !newText.trim() ?
      alert("Please Fill Input Correctly") :
      (setText((prevText) => [...prevText, newText]))

    setNewText('')
    setWordCount(digits)

    setIsActive(true)
    setTimeout(() => {
      setIsActive(false)
    }, 1000)
  }

  return (
    <div className='p-10 border max-w-3xl h-150'>
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
      <p>{text}</p>
    </div>
  )
}

export default Comments
