import React from 'react'
import ToDoList from '../components/ToDoList'


const Home = () => {
    return (
        <div>
            <div className='mt-20 container mx-auto h-120 max-w-4xl p-15 '>
                <ToDoList />
            </div>
        </div>
    )
}

export default Home
