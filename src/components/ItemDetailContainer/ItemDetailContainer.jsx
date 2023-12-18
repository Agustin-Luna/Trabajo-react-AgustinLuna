import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null); 

    const { itemId } = useParams(); 

    useEffect(() => {
        pedirDatos()
        .then((data) => {
            const itemData = data.find((producto) => producto.id === Number(itemId));
            setItem(itemData);
        });
    }, [itemId]); 

    return (
        <>
        {item && <ItemDetail item={item}/>}      
        </>
        );
};


export default ItemDetailContainer