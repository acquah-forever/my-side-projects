import React, { useState } from 'react'

const ToDoList = () => {
    const [task, setTask] = useState([])
    const [submitTask, setSubmitTask] = useState('')
    function handleChange(e) {
        setSubmitTask(e.target.value)
    }
    function handleClick() {
        setTask((list) => [...list, submitTask])
        setSubmitTask('')
    }
    return (
        <div className='shadow-[8px_8px_8px_8px_black] dark:shadow-none dark:border-2 p-15 rounded-xl'>
            <div className='flex flex-col'>
                <h1 className="text-center font-semibold text-3xl">TODO LIST</h1>
                <div className='w-full'>
                    <input className='p-4 outline-none border-red-300' onChange={handleChange} value={submitTask} type="text" placeholder='Enter Task' />
                </div>
            </div>
            <button className='p-3 bg-blue-300 border rounded-lg' onClick={handleClick}>Add Task</button>
            <ul>
                {task.map((e, index) => <li key={index}>{e}</li>)}
            </ul>

        </div>
    )
}

export default ToDoList
