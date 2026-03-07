import React from 'react'
import Hero from '../components/Hero'
import CurrentProjects from '../components/CurrentProjects'
import { Projects } from '../helpers/Projects'


const Home = () => {
    return (
        <home>
            <div className='min-h-screen'>
                <Hero />
            </div>
            <div className='p-6 sm:p-10 md:p-16 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 place-items-center'>
                {Projects.map((e) => (<CurrentProjects
                    key={e.id}
                    title={e.title}
                    description={e.description} />
                ))}
            </div>
        </home>
    )
}

export default Home
