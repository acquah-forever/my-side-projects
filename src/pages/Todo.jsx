import React, { useState } from 'react';

const ToDoList = () => {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    function handleChange(event) {
        setNewTask(event.target.value);
    }
    function handleClick() {
        if (!newTask.trim()) return;
        setTask((task) => [...task, newTask]);
        setNewTask('');
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
        }, 1000)
    }

    function handleDelete(index) {
        setTask(task.filter((_, i) => i !== index));
    }
    return (
        <div>
            <div className='shadow-[8px_8px_8px_8px_black] dark:shadow-none dark:border-none p-15 rounded-xl'>
                <div className='flex flex-col mb-10'>
                    <h1 className="text-center text-black dark:text-white font-semibold text-3xl mb-7">CLASSY TODO LIST 📋 😊</h1>
                    <div className='w-full'>
                        <input className={`w-full text-black dark:text-white p-4 outline-none border-2 rounded-lg ${isClicked ? 'border-green-500' : 'border-blue-400'} `} onChange={handleChange} value={newTask} type="text" placeholder='Enter Task' />
                    </div>
                </div>
                <button className='cursor-pointer mb-7 p-3 bg-blue-300 border rounded-lg disabled:opacity-50' onClick={handleClick} disabled={!newTask.trim()}>Add Task</button>
                {task.length > 0 ? (
                    <ul>
                        {task.map((e, index) =>
                            <div key={index} className='mb-2 bg-indigo-300 dark:bg-indigo-400 rounded-lg px-3 py-4 md:py-1 grid grid-cols-1 space-y-2 md:flex md:flex-row md:justify-between md:items-center'>
                                <li className='flex flex-col sm:flex-row sm:items-center sm:justify-between px-1 tracking-tight wrap-break-word min-w-0'>{e}</li>
                                <div className='flex space-x-3'>
                                    <button className='bg-cyan-300 dark:bg-cyan-600 px-3 py-2 border rounded-lg cursor-pointer w-full sm:w-auto' onClick={() => handleDelete(index)}>Remove Task</button>
                                </div>
                            </div>
                        )}
                    </ul> ) : null}


            </div>
        </div>
    )
}

export default ToDoList
