import headerImage from "./assets/header-image.png"
import Header from "./components/Header"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./components/data.js"
import GameOver from "./components/GameOver.js"

const initialGameBoard : (string | null)[][] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

export type gameTurnProp = {
    player : string,
    square : {
        row : number,
        col : number
    }
}

type turnProp = {
    player : string
}

function derivedActivePlayer(gameTurns : turnProp[]){
    let currentPlayer = "X"

    if(gameTurns.length > 0 && gameTurns[0].player === "X"){
        currentPlayer = "O"
    }
    return currentPlayer
}

export default function App(){
    const [gameTurns, setGameTurns] = useState<gameTurnProp[]>([])

    let gameBoard = [...initialGameBoard.map((arr) => [...arr])]

    const activePlayer = derivedActivePlayer(gameTurns)

    for (const turn of gameTurns){
        const {square, player} = turn
        const {row, col} = square 
    
        gameBoard[row][col] = player !== "" ? player : null
    }

    let winner !: string

    for (const combination of WINNING_COMBINATIONS){
        const first = gameBoard[combination[0].row][combination[0].column]
        const second = gameBoard[combination[1].row][combination[1].column]
        const third = gameBoard[combination[2].row][combination[2].column]

        if(first && first === second && first === third){
            winner = first
        }
    }

    const handleSelectSquare = (rowIndex : number, colIndex : number) => {

        setGameTurns(prevTurns => {
            let currentPlayer = derivedActivePlayer(prevTurns)

            if(prevTurns.length > 0 && prevTurns[0].player === "X"){
                currentPlayer = "O"
            }

            const updatedTurns = [
                {square : {row : rowIndex, col : colIndex}, player : currentPlayer },
                ...prevTurns,
            ]
            return updatedTurns
        })
    }

    return(
        <main>
        <Header image = {{src : headerImage, alt : "logo image of the game"}}>
            <h2>Tic Tac Toe</h2>
        </Header>
        <div className="flex mx-auto">
        <Player name="player-1" symbol="X" isActive={activePlayer === "X"}/>
        <Player name="player-2" symbol="O" isActive={activePlayer === "O"}/>
        </div>
        {winner && <h2>you won, {winner}</h2> }
        <GameBoard handleSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
        {winner && <GameOver winner={winner}/>}
        <Log gameTurns = {gameTurns}/>
        </main>
    )
}