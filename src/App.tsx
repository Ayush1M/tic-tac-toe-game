import headerImage from "./assets/header-image.png"
import Header from "./components/Header"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"

export default function App(){

    const [activePlayer, setActivePlayer] = useState<string>("X")

    const handleSelectSquare = () => {
        setActivePlayer(prevState => prevState === "X" ? "O" : "X")
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
        <GameBoard handleSelectSquare={handleSelectSquare} activePlayer={activePlayer}/>
        </main>
    )
}


