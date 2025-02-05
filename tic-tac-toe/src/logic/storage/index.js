export const saveGameToStorage = ({newBoard, newTurn}) =>{
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
}


export const resetGameToStorage = () =>{
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}