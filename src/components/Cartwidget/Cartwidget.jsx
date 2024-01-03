import React, { useContext } from 'react'
import '../Cartwidget/Cartwidget.css'
import { Link } from 'react-router-dom'
import { CartContex } from '../context/CartContext'

export const Cartwidget = () => {
    const {itemsInCart} = useContext(CartContex)


    return(
        <Link to="/cart">
        <i className="bi bi-cart4"></i>
        <span className='m-4 text-3xl'>{itemsInCart()}</span>
        </Link>
    )
}
export default Cartwidget


