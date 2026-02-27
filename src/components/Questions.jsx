import React, { useState, useContext } from 'react'
import { QuizContext } from '../helpers/Context'
import { QuestionBank } from '../helpers/QuestionBank'

const Questions = () => {
  const { score, setScore, setGameState } = useContext(QuizContext)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState('')

  function nextQuestion() {
    if (QuestionBank[currentQuestion].answer == optionChosen) {
      setScore(score + 1)
    }
    setCurrentQuestion(currentQuestion + 1)
  }

  function finishquiz() {
    if (QuestionBank[currentQuestion].answer == optionChosen) {
      setScore(score + 1)
    }

    setGameState('endscreen')

  }

  return (
    <div className='text-white mt-5 w-125 h-125 border rounded-lg bg-sky-500 flex flex-col justify-center items-center'>
      <h1 className='text-xl tracking-tight'>{QuestionBank[currentQuestion].prompt}</h1>
      <div className='space-x-2 mb-3 mt-3'>
        <button className='cursor-pointer bg-slate-500 border-2 p-2 rounded' onClick={() => setOptionChosen('A')}>{QuestionBank[currentQuestion].optionA}</button>
        <button className='cursor-pointer bg-slate-500 border-2 p-2 rounded' onClick={() => setOptionChosen('B')}>{QuestionBank[currentQuestion].optionB}</button>
        <button className='cursor-pointer bg-slate-500 border-2 p-2 rounded' onClick={() => setOptionChosen('C')}>{QuestionBank[currentQuestion].optionC}</button>
        <button className='cursor-pointer bg-slate-500 border-2 p-2 rounded' onClick={() => setOptionChosen('D')}>{QuestionBank[currentQuestion].optionD}</button>
      </div>
      {currentQuestion == QuestionBank.length - 1 ? (
        <button className='cursor-pointer bg-slate-500 p-4 border-2 rounded-lg' onClick={finishquiz}>Finish quiz</button>
      ) : (
        <button className='cursor-pointer bg-slate-500 p-4 border-2 rounded-lg' onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  )
}

export default Questions
