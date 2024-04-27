import { FC, useState } from "react";

const initialGameBoard  = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


const GameBoard : FC = () => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)


    const handleSelect = (rowIndex : number, colIndex: number) => {
        setGameBoard(prevGameBoard => {
            const updatedGameBoard : any = [...prevGameBoard.map(arr => [...arr])]
            updatedGameBoard[rowIndex][colIndex] = "X"
            return updatedGameBoard
        })
    }

    return (
        <ul className="flex flex-wrap justify-center gap-4">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                {row.map((col, colIndex) => 
                <ul key={colIndex}>
                    <li key={colIndex}>
                    <button className="w-36 h-36 bg-black text-white" 
                    onClick={() => handleSelect(rowIndex, colIndex)}>{col}</button>
                </li>
                </ul> )}
            </li> )}
        </ul>
    )
}

export default GameBoard