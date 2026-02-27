import React, { useState, useContext } from 'react'
import MainMenu from '../components/MainMenu'
import Questions from '../components/Questions'
import EndScreen from '../components/EndScreen'

import { QuizContext } from '../helpers/Context'


const Quiz = () => {
  const [gameState, setGameState] = useState('menu')

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState, setGameState}}>
        {gameState === 'menu' && <MainMenu />}
        {gameState === 'quiz' && <Questions />}
        {gameState === 'endscreen' && <EndScreen />}
      </QuizContext.Provider>

    </div>
  )
}

export default Quiz
