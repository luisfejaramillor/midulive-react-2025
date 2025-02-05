import { Square } from "./SquareCard"


export const WinnerModal = ({winner, handleResetGame}) => {
    if(winner === null) return
    console.log(winner)
    return (
        <section className="winner" >
            <div className="text" >
                <h2>
                {
                    winner === false ?
                    'Empate' :
                    'Ganó: '
                }
                </h2>
                <header className="win">
                {
                    <Square>{winner ? winner : '.'}</Square>
                }
                </header>
                <footer>
                    <button onClick={handleResetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}
