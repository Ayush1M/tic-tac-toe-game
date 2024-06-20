import { FC } from "react"
import { gameTurnProp } from "../App"

type LogProps = {
    gameTurns : gameTurnProp[]
}

const Log : FC<LogProps> = ({gameTurns}) => {
    return (
        <ul className="mt-12">
            {gameTurns.map((turn) =>
                <li key={`${turn.square.row}${turn.square.col}`} className="text-white text-2xl max-lg:text-center animate-slide-in-from-left"> 
                {turn.player} selected {turn.square.col},{turn.square.row} 
                </li>)}
        </ul>
    )
}

export default Log