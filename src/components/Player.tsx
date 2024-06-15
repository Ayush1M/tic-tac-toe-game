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
        <>
        <ul>
            <li className={`${isActive ? "border-2 border-yellow-500" : undefined}`}>
                {isEditing ? 
                <input type="text" value={playerName} required  onChange={handleChange}/> : 
                <span>{playerName}</span>}
                <span>{symbol}</span>
            </li>
        </ul>
            <button className="ml-4" onClick={handleClick}>{isEditing ? "save" : "edit" }</button>
        </>
    )
}

export default Player