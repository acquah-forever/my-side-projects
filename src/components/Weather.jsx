import React, { useState } from 'react'

const weather = () => {
    return (
        <div className='mt-10 p-10 max-w-2xl'>
            <div>
                <h1 className="font-bold text-3xl text-center">TODO LIST</h1>
            </div>
            <form className='flex flex-col mb-10'>
                <input type="text" placeholder='Enter your Todo Item' />
            </form>
            <button className='flex justify-start'>Add Task</button>


        </div>
    )
}

export default weather
