import React from 'react'

const Comments = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium">INTERACTIVE COMMENT SECTION</h1>
      <input type="text" placeholder='Enter comment' />
      <span>200</span>
      <button className='bg-sky-400 p-2 rounded-lg'>Send Comment</button>
    </div>
  )
}

export default Comments
