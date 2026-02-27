import React,{ useState } from 'react'
import { QuestionBank } from '../helpers/QuestionBank'

const Questions = () => {
  const [currenQuestion,setCurrentQuestion] = useState(0)


  return (
    <div>
      <h1>{QuestionBank[currenQuestion].prompt}</h1>
      <div>
        <button className='cursor-pointer bg-gray-400 p-1 rounded'>{QuestionBank[currenQuestion].optionA}</button>
        <button className='cursor-pointer bg-gray-400 p-1 rounded'>{QuestionBank[currenQuestion].optionB}</button>
        <button className='cursor-pointer bg-gray-400 p-1 rounded'>{QuestionBank[currenQuestion].optionC}</button>
        <button className='cursor-pointer bg-gray-400 p-1 rounded'>{QuestionBank[currenQuestion].optionD}</button>
      </div>

      
    </div>
  )
}

export default Questions
