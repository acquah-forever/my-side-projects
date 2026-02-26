import React, { useState } from 'react'

const ToDoList = () => {
    const [task, setTask] = useState([])
    const [newTask, setNewTask] = useState('')
    function handleChange(e) {
        setNewTask(e.target.value)
    }
    function handleClick() {
        setTask((task) => [...task, newTask])
        setNewTask('')
    }
    function handleDelete(index) {
        setTask(task.filter((_, i) => i !== index))

    }
    return (
        <div>
            <div className='shadow-[8px_8px_8px_8px_black] dark:shadow-none dark:border-2 p-15 rounded-xl'>
                <div className='flex flex-col mb-10'>
                    <h1 className="text-center font-semibold text-3xl mb-7">CLASSY TODO LIST 📋 😊</h1>
                    <div className='w-full'>
                        <input className='w-full p-4 outline-none border-2 rounded-lg border-blue-400' onChange={handleChange} value={newTask} type="text" placeholder='Enter Task' />
                    </div>
                </div>
                <button className='cursor-pointer p-3 bg-blue-300 border rounded-lg disabled:opacity-40' onClick={handleClick} disabled={!newTask.trim()}>Add Task</button>
                {task.length === 0 ? null : (
                    <ul className='mt-5 p-2'>
                        {task.map((e, index) => <li className='bg-indigo-300 mb-2 px-5 py-2.5 rounded-xl space-y-4 flex justify-between items-center' key={index}>{e} <button className='cursor-pointer px-3 py-2 bg-blue-300 border rounded-lg' onClick={() => handleDelete(index)}>Remove Task</button></li>)}
                    </ul>
                )}

            </div>
        </div>
    )
}

export default ToDoList
