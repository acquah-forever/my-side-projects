import React from 'react'

const CurrentProjects = (props) => {
  return (
    <div className="text-center border rounded-xl p-4 sm:p-8 md:p-12 max-w-2xl mx-auto space-y-4">
      <h1>{props.title}</h1>
      <p>{props.description}</p>

    </div>
  )
}

export default CurrentProjects
