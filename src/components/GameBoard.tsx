import { FC } from "react";

type gameBoardProp = {
    handleSelectSquare : (rowIndex : number, colIndex : number) => void,
    gameBoard : (string | null)[][]
}


const GameBoard : FC<gameBoardProp> = ({ handleSelectSquare, gameBoard }) => {

    return (
        <ul className="flex flex-wrap justify-center gap-4">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                {row.map((col, colIndex) => 
                <ul key={colIndex}>
                    <li key={colIndex}>
                    <button className="w-36 h-36 bg-black text-white" 
                    onClick={() => handleSelectSquare(rowIndex, colIndex)}
                    disabled={col !== ""}>{col}</button>
                </li>
                </ul> )}
            </li> )}
        </ul>
    )
}

export default GameBoard