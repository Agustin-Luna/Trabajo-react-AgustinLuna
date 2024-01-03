import { useContext, useState } from "react";
import Boton from "../../utils/Boton";
import ItemCounter from "./ItemCounter";
import { CartContex } from "../context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState (1)
  const {addToCart, isInCart} = useContext (CartContex)
console.log(isInCart(item.id))





  const btnAgregar = () => {
    const itemToCart = {
      ...item, 
      cantidad,
    }

    addToCart(itemToCart)
  }


  return (
    <div key={item.id} className="container m-auto mt-8">
      <h3 className="mt-4 text-2xl font-semibold mb-4 ml-2">{item.nombre}</h3>
      <hr />

      <div className="flex gap-8 pt-4 ml-8">
        <img src={item.img} alt={item.name} className="max-w-xs mr-4"/>

        <div>
          <p className="text-xl font-bold">Precio: ${item.precio}</p>
          {
            isInCart(item.id)
            ? <Boton><Link to="/cart">Terminar compra</Link></Boton>
            :<>
            <ItemCounter
              cantidad={cantidad}
              stock={item.stock}
              setCantidad={setCantidad}
              />
            <Boton onClick={btnAgregar} className="flex mt-4">Agregar al carrito</Boton>
            </>
          }




        </div>
      </div>
    </div>
  );
  };

  export default ItemDetail;