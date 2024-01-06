import { useContext } from "react"
import { CartContex } from "../context/CartContext"
import Boton from "../../utils/Boton"
import trashIcon from "../../assets/Trash.svg"
import { Link } from "react-router-dom"


const CartView = () => {
    const {cart, totalCart, trashItem} = useContext(CartContex)
    return (
    <section className="container m-auto mt-8">

        <div className="flex justify-between">
        <h2 className="text-4xl font-semibold m-8">Sus compras</h2>
        <h4 className="text-4xl font-semibold m-8">Total: ${totalCart()}</h4> 
        </div>
        <hr />

        <ul>
            {
                cart.map((item) => (
                    <li key={item.id} className="flex gap-3 border-b ml-10 mb-5">
                        <img src={item.img} alt="img carrito" className="w-40" />
                        <div>
                        <h3 className="text-3xl font-bold">{item.nombre}</h3>
                        <p className="text-xl font-semibold">Precio: $ {item.precio * item.cantidad}</p>
                        <p className="text-xl">Cantidad: {item.cantidad}</p>
                        <Boton onClick={() => trashItem(item.id)}> 
                            <img src={trashIcon}  alt="trash img"  className="w-5"/>
                        </Boton>
                        </div>
                    </li>
                ))
            }
        </ul>

            <Boton className="ml-10">
                <Link to="/checkout">Terminar mi compra</Link>
            </Boton>

    </section>
    )
}

export default CartView