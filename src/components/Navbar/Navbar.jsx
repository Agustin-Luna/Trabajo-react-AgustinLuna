import '../Navbar/Navbar.css'
import Cartwidget from '../Cartwidget/Cartwidget'
import Icon from '../../assets/Icon-arg.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return(
        <header className="header">
            <div className="header-container">
                <h1>
                    <img src={Icon} alt="" className="text-xl pl-4"/>
                </h1>

                <nav className="navbar">
                    <Link to={"/"} className="decoration no-underline text-gray-50 text-xl font-serif font-medium hover:text-red-600 transition duration-300">Inicio</Link>
                    <Link to={"/producto/seleccion"} className="decoration no-underline text-gray-50 text-xl font-serif font-medium hover:text-red-600 transition duration-300">Selecciones</Link>
                    <Link to={"/producto/argentino"} className="decoration no-underline text-gray-50 text-xl font-serif font-medium hover:text-red-600 transition duration-300">Futbol Argentino</Link>
                    <Link to={"/producto/europa "}className="decoration no-underline text-gray-50 text-xl font-serif font-medium hover:text-red-600 transition duration-300">Futbol Europeo</Link>
                </nav>
                <div className="carrito">
                    <Cartwidget />
                </div>
            </div>
        </header>
    )
}

export default Navbar