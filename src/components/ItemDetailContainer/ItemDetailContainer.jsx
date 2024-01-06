import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null); 

    const { itemId } = useParams(); 

    useEffect(() => {
// armar la referencia 
        const docRef = doc(db, 'productos', itemId)
// llamar a la referencia
        getDoc (docRef)
        .then((docSnapshot) => {
            const doc = {
                ...docSnapshot.data(),
                id: docSnapshot.id
            }
            setItem(doc)
        })


    }, []); 


    return (
        <>
        {item && <ItemDetail item={item}/>}      
        </>
        );
};


export default ItemDetailContainer