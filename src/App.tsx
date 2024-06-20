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

type playerNamesProp = {
    "X" : string,
    "O" : string
}

function derivedActivePlayer(gameTurns : turnProp[]){
    let currentPlayer = "X"

    if(gameTurns.length > 0 && gameTurns[0].player === "X"){
        currentPlayer = "O"
    }
    return currentPlayer
}

function derivedWinner(gameBoard : (string | null)[][], playerNameChange : playerNamesProp){
    let winner !: string

    for (const combination of WINNING_COMBINATIONS){
        const first = gameBoard[combination[0].row][combination[0].column]
        const second = gameBoard[combination[1].row][combination[1].column]
        const third = gameBoard[combination[2].row][combination[2].column]

        if(first && first === second && first === third){
            winner = playerNameChange[first as keyof playerNamesProp]
        }
    }
    return winner
}

export default function App(){
    const [playerNameChange, setPlayerNameChange] = useState<playerNamesProp>({
        "X" : "Player 1",
        "O" : "Player 2"
    })
    const [gameTurns, setGameTurns] = useState<gameTurnProp[]>([])

    let gameBoard = [...initialGameBoard.map((arr) => [...arr])]

    const activePlayer = derivedActivePlayer(gameTurns)

    for (const turn of gameTurns){
        const {square, player} = turn
        const {row, col} = square 
    
        gameBoard[row][col] = player !== "" ? player : null
    }

    const winner = derivedWinner(gameBoard, playerNameChange)
    const isDraw = gameTurns.length === 9 && !winner

   
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

    const handleNameChange = (symbol : string, newPlayerName : string) =>{
        setPlayerNameChange(prevPlayer => {
            return {
                ...prevPlayer,
                [symbol] : [newPlayerName]
            }
        })
    }

    const reset = () =>{
        setGameTurns([])
    }

    return(
        <main className="bg-bg-clr min-h-screen font-body max-lg:min-w-max">
        <Header image = {{src : headerImage, alt : "logo image of the game"}}>
            <h2 className="text-4xl mt-8 font-bold animate-bounce text-primary-two">Tic Tac Toe</h2>
        </Header>
        <div className="flex mx-auto my-8 max-lg:flex max-lg:flex-col">
        <Player 
        name="player-1" 
        symbol="X" 
        isActive={activePlayer === "X"}
        handleNameChange = {handleNameChange}
        />
        <Player 
        name="player-2" 
        symbol="O" 
        isActive={activePlayer === "O"}
        handleNameChange = {handleNameChange}
        />
        </div>
            
        {(winner || isDraw) && <GameOver winner={winner} reset={reset}/>}

        <div className="flex justify-evenly max-lg:flex max-lg:flex-col">
        <GameBoard 
        handleSelectSquare={handleSelectSquare} 
        gameBoard={gameBoard} />

        <Log gameTurns = {gameTurns}/>
        </div>
        </main>
    )
}