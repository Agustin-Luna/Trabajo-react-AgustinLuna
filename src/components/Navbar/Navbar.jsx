import './Navbar.css'
import Cartwidget from './Cartwidget'
import Icon from '../../assets/Icon-arg.png'

const Navbar = () => {
    return(
        <header className="header">
            <div className="header-container">
                <h1>
                    <img src={Icon} alt="" className="text-xl pl-4"/>
                </h1>

                <nav className="navbar">
                    <a href="#" className="decoration no-underline text-gray-50 text-xl font-serif font-medium">Inicio</a>
                    <a href="#" className="decoration no-underline text-gray-50 text-xl font-serif font-medium">Selecciones</a>
                    <a href="#" className="decoration no-underline text-gray-50 text-xl font-serif font-medium">Futbol Argentino</a>
                    <a href="#" className="decoration no-underline text-gray-50 text-xl font-serif font-medium">Futbol Europeo</a>
                </nav>
                <div className="carrito">
                    <Cartwidget />
                </div>
            </div>
        </header>
    )
}

export default Navbar