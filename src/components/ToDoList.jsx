import React, { useState } from 'react';

const ToDoList = () => {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [isClicked, setIsClicked] = useState(false);


    function handleChange(e) {
        setNewTask(e.target.value);
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
            <div className='shadow-[8px_8px_8px_8px_black] dark:shadow-none dark:border-2 p-15 rounded-xl'>
                <div className='flex flex-col mb-10'>
                    <h1 className="text-center font-semibold text-3xl mb-7">CLASSY TODO LIST 📋 😊</h1>
                    <div className='w-full'>
                        <input className={`w-full p-4 outline-none border-2 rounded-lg ${isClicked ? 'border-green-500' : 'border-blue-400'} `} onChange={handleChange} value={newTask} type="text" placeholder='Enter Task' />
                    </div>
                </div>
                <button className='cursor-pointer mb-7 p-3 bg-blue-300 border rounded-lg disabled:opacity-50' onClick={handleClick} disabled={!newTask.trim()}>Add Task</button>
                <ul>
                    {task.map((e, index) =>
                        <div key={index} className='mb-2 bg-indigo-300 rounded-lg p-3 flex justify-between items-center'>
                            <li>{e}</li>
                            <div className='flex space-x-3'>
                                <button className='bg-cyan-300 px-3 py-2 border rounded-lg cursor-pointer'onClick={() => handleDelete(index)}>Remove Task</button>
                            </div>
                        </div>

                    )}
                </ul>

            </div>
        </div>
    )
}

export default ToDoList
