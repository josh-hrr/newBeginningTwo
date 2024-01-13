
import '../styles/Header.css';   
import reactLogo from '../img/reactLogo.png';
import myLogo from '../img/succeedInPixels.jpeg';
import individual from './IndividualPage';
import { NavLink } from 'react-router-dom';

function Header() { 
    return (
        <div className="header px-0 py-0"> 
            <p className="my-0 italic border-b-2"><b>Succeed in Pixels</b></p> 
            <div className="buttons"> 
                <NavLink to="/estudiante">
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">    
                        Estudiante
                    </button> 
                </NavLink> 
                <NavLink to="/individual"> 
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Profesor
                    </button>  
                </NavLink>
                <NavLink to="/"> 
                    <button className="bg-colorOrange hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-blue-500 rounded">
                        Home
                    </button> 
                </NavLink>
            </div>
        </div>
    );
}

export default Header;