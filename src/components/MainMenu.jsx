import React,{ useContext } from 'react'
import { QuizContext } from '../helpers/Context'

const MainMenu = () => {
  const {gameState,setGameState} = useContext(QuizContext)

  function handleClick(){
    setGameState('quiz')
  }
  return (
    <div className='mt-5 w-125 h-125 border rounded-lg bg-sky-500 flex flex-col justify-center items-center'>
      <button className='cursor-pointer text-black dark:text-white w-75 h-auto m-1.25 text-2xl font-medium bg-slate-400 border-2 rounded-lg p-5'onClick={handleClick}>Start Quiz</button>
      
    </div>
  )
}

export default MainMenu
