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
    <div>
      <h1>{QuestionBank[currentQuestion].prompt}</h1>
      <div className='space-x-2 mb-3 mt-3'>
        <button className='cursor-pointer bg-gray-400 p-1 rounded' onClick={() => setOptionChosen('A')}>{QuestionBank[currentQuestion].optionA}</button>
        <button className='cursor-pointer bg-gray-400 p-1 rounded' onClick={() => setOptionChosen('B')}>{QuestionBank[currentQuestion].optionB}</button>
        <button className='cursor-pointer bg-gray-400 p-1 rounded' onClick={() => setOptionChosen('C')}>{QuestionBank[currentQuestion].optionC}</button>
        <button className='cursor-pointer bg-gray-400 p-1 rounded' onClick={() => setOptionChosen('D')}>{QuestionBank[currentQuestion].optionD}</button>
      </div>
      {currentQuestion == QuestionBank.length - 1 ? (
        <button className='cursor-pointer bg-gray-400 p-1 rounded' onClick={finishquiz}>Finish quiz</button>
      ) : (
        <button className='cursor-pointer bg-gray-400 p-1 rounded' onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  )
}

export default Questions
