import { NavLink } from "react-router-dom"

function ButtonOrange ({text, path}) {
    return (
        <NavLink to={path}>
            <button className="w-full mt-2 bg-colorOrange hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-blue-500 rounded">
                {text}
            </button>
        </NavLink>
    )
}

export default ButtonOrange;