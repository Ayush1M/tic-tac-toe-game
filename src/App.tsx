import headerImage from "./assets/header-image.png"
import Header from "./components/Header"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log"

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

export default function App(){

    const [activePlayer, setActivePlayer] = useState<string>("X")
    const [gameTurns, setGameTurns] = useState<gameTurnProp[]>([])

    let gameBoard = [...initialGameBoard.map((arr) => [...arr])]

    for (const turn of gameTurns){
        const {square, player} = turn
        const {row, col} = square 
    
        gameBoard[row][col] = player !== "" ? player : null
      }

    const handleSelectSquare = (rowIndex : number, colIndex : number) => {
        setActivePlayer(prevState => prevState === "X" ? "O" : "X")

        setGameTurns(prevTurns => {
            let currentPlayer = "X"

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
        <GameBoard handleSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
        <Log gameTurns = {gameTurns}/>
        </main>
    )
}