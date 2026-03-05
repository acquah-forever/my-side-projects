import React from 'react'
import Hero from '../components/Hero'
import CurrentProjects from '../components/CurrentProjects'
import { Projects } from '../helpers/Projects'


const Home = () => {
    return (
        <div>
            <div>
                <Hero />
            </div>
            <div>
                {Projects.map((e) => (<CurrentProjects
                    key={e.id}
                    title={e.title}
                    description={e.description} />
                ))}
            </div>


        </div>
    )
}

export default Home
