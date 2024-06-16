import { ChangeEvent, FC, useState } from "react";

type PlayerProp = {
    name : string,
    symbol : string,
    isActive : boolean
    handleNameChange : (symbol : string , playerName: string) => void
}

const Player : FC<PlayerProp> = ({name, symbol, isActive, handleNameChange}) => {

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [playerName, setPlayerName] = useState<string>(name)

    const handleClick = () => {
        setIsEditing(prevState => !prevState)
        if(isEditing){
            handleNameChange(symbol, playerName)    
        }
    }

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.target.value)
    }

    return (
        <div className="mr-8 flex justify-center items-center w-full">
        <ul className="w-80">
            <li className={`${isActive ? "border-2 border-yellow-500 p-2 px-8 flex justify-between" : "flex justify-between"}`}>
                {isEditing ? 
                <input 
                type="text" 
                value={playerName} 
                required  
                onChange={handleChange} 
                className="w-36 p-1 rounded-lg mr-4"
                /> : 
                <span className="text-2xl text-primary-two">{playerName}</span>}
                <span className="text-2xl text-primary-two">{symbol}</span>
            </li>
        </ul>
            <button 
            className="ml-4 bg-primary-two px-4 py-2 text-lg rounded-lg" 
            onClick={handleClick}>
                {isEditing ? "save" : "edit" }
            </button>
        </div>
    )
}

export default Player