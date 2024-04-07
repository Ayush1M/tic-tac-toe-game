import { FC, type ReactNode } from "react"

type HeaderProp = {
    image : {
        src : string,
        alt : string
    },
    children : ReactNode
}

const Header : FC<HeaderProp> = ({children, image}) => {
    return (
        <header className="flex flex-col justify-center items-center">
            <img src={image.src} alt={image.alt} className="w-28" />
            <div className="text-4xl mt-4 font-bold">{children}</div>
        </header>
    )

}

export default Header