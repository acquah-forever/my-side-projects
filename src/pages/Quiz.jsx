import React from 'react'
import { quiz } from '../../constants/Constant'

const Quiz = () => {
  return (
    <div>
      <ul>
        {questions.map((e,index) => <li key={index}>
          <h1>{e.question}</h1>
          <ul>
            {e.answers.map((ans,i) => <li key={i}>
              {ans}
            </li>)}
          </ul>
        </li>)}

      
      </ul> 
      
    </div>
  )
}

export default Quiz
