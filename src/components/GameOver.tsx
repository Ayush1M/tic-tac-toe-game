import { FC } from "react"

type GameOverProps = {
    winner ?: string
}

const GameOver: FC<GameOverProps> = ({winner}) => {
    return(
        <div className="bg-yellow-500 w-[60%] h-[90%] absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 opacity-90 rounded-lg">
        <div className="flex flex-col items-center min-h-full justify-center text-4xl">
        <h2>Game Over!!!</h2>
        {winner && <p className="my-10">{winner}, Won</p>}
        {!winner && <p className="my-10">It's a draw</p>}
        <button className="p-8 text-primary-two bg-black rounded-lg hover:opacity-80">Play Again</button>
        </div>
        </div>
    )
}

export default GameOver