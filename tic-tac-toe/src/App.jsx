import { useEffect, useState } from "react"
import { saveGameToStorage, resetGameToStorage } from "./logic/storage"
import confetti from 'canvas-confetti'
import { Square } from "./components/SquareCard"
import { TURNS, WINNER_COMBOS } from "./contants"
import { checkEndGame, checkWinner } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"

export const App = () => {
  const [board, setBoard] = useState(()=>{
    const boardStorage = window.localStorage.getItem('board')
    if(boardStorage){
      return JSON.parse(boardStorage)
    }
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const handleResetGame = ()=> {
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn(TURNS.X)
    resetGameToStorage();
  }

  const updateBoard = (index)=> {
    if(board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn

    setBoard(newBoard)

    if(checkEndGame(newBoard)){
      setWinner(false)
      return
    }

    
    const newWinner = checkWinner(newBoard, WINNER_COMBOS, turn)
    if(newWinner){
      setWinner(newWinner)
      confetti()
      return
    }

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)
  }

  useEffect(() => {
    saveGameToStorage({
      newBoard: board,
      newTurn: turn
    })
  }, [board, turn])
  

  return(
    <main className="board" >
      <h1>Tic Tac Toe</h1>
      <button onClick={handleResetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((_, index) =>{
            return(
              <Square key={index} index={index} updateBoard={updateBoard} >
                {board[index]}
              </Square>
            )
          } )
        }
      </section>
      <section className="turn" >
        <Square isSelected={turn === TURNS.X} >
          {
            TURNS.X
          }
        </Square>
        <Square isSelected={turn === TURNS.O} >
          {
            TURNS.O
          }
        </Square>
      </section>
      <WinnerModal winner={winner} handleResetGame={handleResetGame}/>
    </main>
  )

}
