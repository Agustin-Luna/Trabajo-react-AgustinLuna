import Boton from "../../utils/Boton"




const ItemCounter = ({cantidad, stock, setCantidad}) => {

    const btnSumar = () => [
        cantidad < stock && setCantidad (cantidad + 1)
    ]
    
    const btnRestar = () => [
        cantidad > 1 && setCantidad (cantidad - 1)
    ]
    return (
        <div className="flex gap-4 items-center">
            <Boton onClick={btnRestar}>-</Boton>
                <span>{cantidad}</span>
            <Boton onClick={btnSumar}>+</Boton>
        </div>
    )
}

export default ItemCounter