import React from 'react'

const Comments = () => {
  return (
    <div className='p-10 border max-w-3xl h-150'>
      <h1 className="text-3xl text-center font-medium mb-7">INTERACTIVE COMMENT SECTION</h1>
      <div flex flex-col>
        <div className='border border-blue-300 rounded-xl p-2 mb-5'>
          <input className='outline-none w-full' type="text" placeholder='Enter comment' />
          <span className='flex justify-end'>200</span>
        </div>
        <div>
        </div>
        <div className='flex justify-end'>
          <button className='bg-sky-400 p-3 w-40  rounded-lg'>Send Comment</button>
        </div>
      </div>
    </div>
  )
}

export default Comments
