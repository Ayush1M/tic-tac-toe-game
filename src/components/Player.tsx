import { FC } from "react";

type PlayerProp = {
    name : string,
    symbol : string
}

const Player : FC<PlayerProp> = ({name, symbol}) => {
    return (
        <ul>
            <li>
                <span>{name}</span>
                <span>{symbol}</span>
                <button className="ml-4">edit</button>
            </li>
        </ul>
    )
}

export default Player