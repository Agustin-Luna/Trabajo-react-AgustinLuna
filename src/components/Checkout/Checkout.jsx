import { useContext, useState } from 'react';
import { CartContex } from '../context/CartContext';
import { addDoc, collection, getDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Swal from 'sweetalert2';

const Checkout = () => {
    const { cart, totalCart, clearCart} = useContext(CartContex);

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: '',
    });

    const [orderId, setOrderId] = useState(null);

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart(),
            fecha: new Date(),
        };

        const ordersRef = collection(db, 'orders');

    cart.forEach(item => {
        const docRef = doc(db, 'productos', item.id)
        getDoc(docRef)
        .then (doc => {
            updateDoc(docRef, {
                stock: doc.data().stock - item.cantidad
            });
        })
    })
    addDoc(ordersRef, orden).then((doc) => {
        setOrderId(doc.id)
        clearCart()

        Swal.fire("Gracias por su compra")
    })
    };



    if (orderId) {
        return (
            <div>
                <h2 className="text-4xl font-semibold ml-8 mt-3">Gracias por su compra</h2>
                <hr />
                <p className='font-semibold text-xl mt-5 ml-8'>Su orden de compra es: {orderId}</p>
            </div>
        );
    }

    return (
        <div className="container m-auto mt-10">
            <h2 className="text-4xl font-semibold ml-8">Ingresa tus datos </h2>
            <hr />

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md m-8">
                <input
                    className="border p-2 font-semibold"
                    type="text"
                    placeholder="Nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    name="nombre"
                />
                <input
                    className="border p-2 font-semibold"
                    type="text"
                    placeholder="Direccion"
                    value={values.direccion}
                    onChange={handleInputChange}
                    name="direccion"
                />
                <input
                    className="border p-2 font-semibold"
                    type="email"
                    placeholder="E-mail"
                    value={values.email}
                    onChange={handleInputChange}
                    name="email"
                />

                <button
                    type="submit"
                    className="bg-black rounded flex items-center py-2 px-4 text-center justify-center text-white font-semibold my-4">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Checkout;