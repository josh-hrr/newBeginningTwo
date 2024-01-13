import { NavLink } from "react-router-dom"

function ButtonBlue({text, path}) {
    return (
        <NavLink to={path}>
            <button className="w-full mt-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                {text}
            </button>
        </NavLink>
                                
    )
}

export default ButtonBlue;