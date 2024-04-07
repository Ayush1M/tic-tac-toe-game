import headerImage from "./assets/header-image.png"
import Header from "./components/Header"
import Player from "./components/Player"

export default function App(){
    return(
        <main>
        <Header image = {{src : headerImage, alt : "logo image of the game"}}>
            <h2>Tic Tac Toe</h2>
        </Header>
        <div className="flex justify-between w-60 mx-auto">
        <Player name="player-1" symbol="X" />
        <Player name="player-2" symbol="O" />
        </div>
        </main>
    )
}


