import React, { useState } from 'react'
import { ThumbsUp, ThumbsDown } from 'lucide-react'

const digits = 200
const hackersign = "*"

const Comments = () => {
  const [text, setText] = useState([])
  const [newText, setNewText] = useState('')
  const [wordCount, setWordCount] = useState(digits)
  const [isActive, setIsActive] = useState(false)
  const [commentCount, setCommentCount] = useState(0)

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

    setText((prevText) => [...prevText, { content: newText, likes: 0, dislikes: 0 }])

    setNewText('')
    setWordCount(digits)

    !newText.trim() ? setIsActive(false) : setIsActive(true)

    setTimeout(() => {
      setIsActive(false)
    }, 1000)

    setCommentCount(prevCommentCount => prevCommentCount + 1)

  }

  function handleDelete(index) {
    setText(text.filter((_, i) => i !== index))
    setCommentCount(commentCount - 1)
  }

  function like(index) {
    setText((prevText) => prevText.map((comment, i) =>
      i === index ? { ...comment, likes: comment.likes + 1 } : comment))
  }

  function dislike(index) {
    setText((prevText) => prevText.map((comment, i) =>
      i === index ? { ...comment, dislikes: comment.dislikes + 1 } : comment))
  }

  return (
    <div className='flex justify-center px-20'>
      <div className=' min-h-screen  w-200'>
        <h1 className="text-3xl text-center font-medium mb-7">COMMENT SECTION</h1>
        <div className='flex flex-col'>
          <div className={`border-2 rounded-xl p-1 mb-5 ${isActive ? "border-green-500" : "border-slate-300"}`}>
            <input className='outline-none w-full px-1 py-2' onChange={handleChange} type="text" value={newText} placeholder='What are your Thoughts?' />
            <span className='flex justify-end'>Number of Words :{wordCount}</span>
          </div>
          <div className='flex justify-end'>
            <button className={`cursor-pointer ${isActive ? "bg-green-500" : "bg-sky-400"} p-3 w-40  rounded-lg`} onClick={handleClick}>Send Comment</button>
          </div>
        </div>
        <h1>Total Comments: <span>{commentCount}</span></h1>
        <div className='flex flex-col border-2 rounded-xl dark:border-white mt-7 h-110 px-3 py-5 w-full overflow-y-scroll text-black'>
          <ul>
            {text.map((comment, index) =>
              <li className='bg-sky-300 dark:bg-sky-200 rounded-lg w-full mb-3 px-3 py-1' key={index}>
                {comment.content}
                <div className='flex items-center space-x-2 mt-1'>
                  <ThumbsUp className='w-5 h-5'
                    onClick={() => like(index)}
                  />
                  <span>{comment.likes}</span>

                  <ThumbsDown className='w-5 h-5'
                    onClick={() => dislike(index)}
                  />

                  <span>{comment.dislikes}</span>
                </div>
                <div className='flex justify-end'>
                  <button className='cursor-pointer px-4 py-1 border rounded-lg bg-indigo-400 ' onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Comments
