import React, { useState, useContext } from 'react'
import MainMenu from '../components/MainMenu'
import Questions from '../components/Questions'
import EndScreen from '../components/EndScreen'

import { QuizContext } from '../helpers/Context'


const Quiz = () => {
  const [gameState, setGameState] = useState('menu')
  const [score, setScore] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'>Quiz App</h1>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
        {gameState === 'menu' && <MainMenu />}
        {gameState === 'quiz' && <Questions />}
        {gameState === 'endscreen' && <EndScreen />}
      </QuizContext.Provider>

    </div>
  )
}

export default Quiz
