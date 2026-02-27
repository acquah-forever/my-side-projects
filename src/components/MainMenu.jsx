import React,{ useContext } from 'react'
import { QuizContext } from '../helpers/Context'

const MainMenu = () => {
  const {gameState,setGameState} = useContext(QuizContext)

  function handleClick(){
    setGameState('quiz')
  }
  return (
    <div className='mt-5 w-125 h-125 border rounded-lg bg-sky-300 flex flex-col justify-center items-center'>
      <button className='cursor-pointer w-75 h-12.5 m-1.25 text-xl bg-slate-400 border-none rounded p-3'onClick={handleClick}>Start Quiz</button>
      
    </div>
  )
}

export default MainMenu
