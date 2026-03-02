import React,{useState} from 'react'

const digits = 200

const Comments = () => {
  const [text, setText] = useState([])
  const [newText, setNewText] = useState('')
  const [wordCount, setWordcount] = useState(digits)

  function handleChange(e){
    const value = e.target.value
    const amountOfWords = value.trim().split(/\s+/).length
    setNewText(value)
    setWordcount(digits - amountOfWords)
    
  }

  function handleClick(){
    !newText.trim() ? 
    alert("Please Fill Input Correctly") : 
    (setText((prevText) => [...prevText, newText]))
    setNewText('')
    }

  return (
    <div className='p-10 border max-w-3xl h-150'>
      <h1 className="text-3xl text-center font-medium mb-7">INTERACTIVE COMMENT SECTION</h1>
      <div flex flex-col>
        <div className='border border-blue-300 rounded-xl p-1 mb-5'>
          <input className='outline-none w-full px-1 py-2'onChange={handleChange} type="text" value={newText} placeholder='Enter comment' />
          <span className='flex justify-end'>{wordCount}</span>
        </div>
        <div className='flex justify-end'>
          <button className='cursor-pointer bg-sky-400 p-3 w-40  rounded-lg'onClick={handleClick}>Send Comment</button>
        </div>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Comments
