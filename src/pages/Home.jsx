import React from 'react'
import CurrentProjects from '../components/CurrentProjects'
import Projects from './helper/Projects'


const Home = () => {
    return (
        <div>
            <h1 className="font-semibold text-3xl">My Practice Projects</h1>
            <h2 className="font-medium">A shoecase of the innovative tools, systems, and experiments I am currently building.</h2>
            <button>View Projects</button>
            <h1>Current Projects</h1>
            <div>
                {data.map((projects,id))}

            </div>


        </div>
    )
}

export default Home
