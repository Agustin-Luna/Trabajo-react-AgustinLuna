import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'



const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
//armar la ref
        const productosRef = collection(db, 'productos')
        const docsRef = categoryId
                        ? query(productosRef, where('category', '==', categoryId)) 
                        : productosRef
//llamar la ref
        getDocs(docsRef)
        .then ((querySnapshot) => {
            const docs = querySnapshot.docs.map (doc =>{
                return{
                    ...doc.data(),
                    id: doc.id
                }
            })
            setProductos(docs)
            
        })

}, [categoryId]);

    return (
    <>
        <ItemList productos={productos} />
    </>
    );
};

export default ItemListContainer;

