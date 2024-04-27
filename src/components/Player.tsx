import { ChangeEvent, FC, useState } from "react";

type PlayerProp = {
    name : string,
    symbol : string
}

const Player : FC<PlayerProp> = ({name, symbol}) => {

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [playerName, setPlayerName] = useState<string>(name)

    const handleClick = () => {
        setIsEditing(prevState => !prevState)
    }

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.target.value)
    }

    return (
        <>
        <ul>
            <li>
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