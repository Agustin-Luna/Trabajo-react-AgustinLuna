import '../Navbar/Navbar.css'
import Cartwidget from '../Cartwidget/Cartwidget'
import Icon from '../../assets/Icon-arg.png'
import { Link } from 'react-router-dom'
// import { useContext } from 'react'
// import { userContext } from '../context/UserContext'
import '../../utils/Boton'
import Boton from '../../utils/Boton'


const Navbar = () => {
    // const {user, logOut } = useContext(userContext)

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

            {/* {user.logged && <div className='flex items-center'>
            <p className='text-white mr-2 ml-4'>{user.email}</p>
            <Boton onClick={logOut} className='bg-red-600'>Cerrar sesion</Boton>
            </div>} */}
        </header>
    )
}

export default Navbar