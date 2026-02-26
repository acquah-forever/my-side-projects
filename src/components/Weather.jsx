import React, { useState } from 'react'

const weather = () => {

    const [list, setList] = useState([])
    const [submit, setSubmit] = useState(false)

    function handleSubmit(){
        setList([...list, submit])
        setSubmit([])
    }

    return (
        <div>
        <div className='mt-10 p-10 max-w-2xl'>
            <div className='mb-10'>
                <h1 className="font-bold  text-4xl text-center">TODO LIST</h1>
            </div>
                <div className='p-4 border rounded-2xl mb-10'>
                    <input className='outline-none w-full'onChange={(e) => setSubmit(e.target.value)} type="text" placeholder='Enter your Todo Item' />
                </div>
            <button className='text-white flex justify-start bg-sky-500 px-7 py-3 rounded-lg cursor-pointer'onClick={handleSubmit}>Add Task</button>
        </div>

        <div className='bg-slate-200 max-w-4xl'>
            <ul>
                {list.map((e,index) => <li key={index}>{e}</li>)}
            </ul>
        </div>
        </div>
    )
}

export default weather
