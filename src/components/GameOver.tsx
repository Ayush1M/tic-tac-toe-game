import { FC } from "react"

type GameOverProps = {
    winner ?: string
    reset : () => void
}

const GameOver: FC<GameOverProps> = ({winner, reset}) => {
    return(
        <div className="bg-yellow-500 w-9/12 h-5/6 fixed top-24 right-60 -translate-x-1/2 -translate-y-1/2 opacity-90 rounded-lg animate-pop-in">
        <div className="flex flex-col items-center min-h-full justify-center text-4xl">
        <h2>Game Over!!!</h2>
        {winner && <p className="my-10">{winner}, Won</p>}
        {!winner && <p className="my-10">It's a draw</p>}
        <button className="p-8 text-primary-two bg-black rounded-lg hover:opacity-80" onClick={reset}>Play Again</button>
        </div>
        </div>
    )
}

export default GameOver