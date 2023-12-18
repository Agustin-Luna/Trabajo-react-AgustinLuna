import './ItemListContainer.css';
import { pedirDatos } from '../../utils/utils';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
    pedirDatos().then((data) => {
        const filterProducts = categoryId
        ? data.filter((producto) => producto.category === categoryId)
        : data;

        setProductos(filterProducts);
    });
    }, [categoryId]);

    return (
    <>
        <ItemList productos={productos} />
    </>
    );
};

export default ItemListContainer;

