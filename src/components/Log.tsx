import { FC } from "react"
import { gameTurnProp } from "../App"

type LogProps = {
    gameTurns : gameTurnProp[]
}

const Log : FC<LogProps> = ({gameTurns}) => {
    return (
        <ul>
            {gameTurns.map((turn) =>
                <li key={`${turn.square.row}${turn.square.col}`} className="text-white text-2xl"> 
                {turn.player} selected {turn.square.col},{turn.square.row} 
                </li>)}
        </ul>
    )
}

export default Log