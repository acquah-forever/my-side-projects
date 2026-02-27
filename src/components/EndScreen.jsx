import React, { useState, useContext } from 'react'
import { QuizContext } from '../helpers/Context'
import { QuestionBank } from '../helpers/QuestionBank'


const EndScreen = () => {
  const {score, setScore, setGameState} = useContext(QuizContext)

  function restartQuiz(){
    setScore(0)
    setGameState('menu')
  }


  return (
    <div className='mt-5 w-125 h-125 border rounded-lg bg-sky-500 flex flex-col justify-center items-center'>
      <h1 className='text-3xl mb-4'>Quiz Done</h1>
      {" "}
      <h3 className='text-2xl font-medium mb-5'>{score} / {QuestionBank.length}</h3>
      {" "}
      <button className='cursor-pointer text-xl font-semibold bg-slate-500 p-4 border-2 rounded-lg'onClick={restartQuiz}>Restart Quiz</button>

    </div>
  )
}

export default EndScreen
