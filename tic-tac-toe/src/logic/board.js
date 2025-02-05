export const checkWinner = (boardToCheck, WINNER_COMBOS, turn) => {
    let winner = null;
    for(const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(turn === boardToCheck[a] && turn === boardToCheck[b] && turn === boardToCheck[c]){
        winner = turn
      }
    }
    return winner
}

export const checkEndGame = (newBoard)=>{
  return newBoard.every((square) => square !== null)
}