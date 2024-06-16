import { FC } from "react";

type gameBoardProp = {
    handleSelectSquare : (rowIndex : number, colIndex : number) => void,
    gameBoard : (string | null)[][]
}


const GameBoard : FC<gameBoardProp> = ({ handleSelectSquare, gameBoard }) => {

    return (
        <ul className="flex justify-center">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                {row.map((col, colIndex) => 
                <ul key={colIndex}>
                    <li className="flex border-white border-2">
                    <button className="w-36 h-36 text-white text-8xl bg-primary-one" 
                    onClick={() => handleSelectSquare(rowIndex, colIndex)}
                    disabled={col !== ""}>{col}</button>
                </li>
                </ul> )}
            </li> )}
        </ul>
    )
}

export default GameBoard