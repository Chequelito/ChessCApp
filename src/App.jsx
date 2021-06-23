import React, { useEffect, useState } from 'react'
import './App.css'
import { gameSubject, initGame, resetGame } from './Game'
import Board from './Board'
import StyleMenu from './StyleMenu'
// import SubmitButton from './stores/LoginButton'


export default function App() {
  const [board, setBoard] = useState([])
  const [isGameOver, setIsGameOver] = useState()
  const [result, setResult] = useState()
  const [turn, setTurn] = useState()
  // const [showForm, setShowForm] = useState(false);


const [skin, setSkin] = useState('ChessCApp')
  

console.log(skin)

  useEffect(() => {



    initGame()
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board)
      setIsGameOver(game.isGameOver)
      setResult(game.result)
      setTurn(game.turn)
    })
    return () => subscribe.unsubscribe()
  }, [])
  return (
    <div className="container">
    <StyleMenu setSkin ={setSkin} /> 
    {/* {showForm?<SubmitButton />:null}
    <button setShowForm = {setShowForm} showForm = {showForm}></button> */}
      {isGameOver && (
        <h2 className="vertical-text">
          GAME OVER
          <button onClick={resetGame}>
            <span className="vertical-text"> NEW GAME</span>
          </button>
        </h2>
      )}
      <div className="board-container">
        <Board board={board} turn={turn} />
      </div>
      {result && <p className="vertical-text">{result}</p>}
    </div>
  )
}


