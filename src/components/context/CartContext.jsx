import { createContext, useState} from "react";


export const CartContex = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

const addToCart = (item) => {
    setCart([...cart, item])
}

const isInCart = (id) => {
    return cart.some(item => item.id === id)
}

const clearCart = () => {
    setCart([])
}

const itemsInCart = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
}

const totalCart = () => {
    return cart.reduce((acc, item) => acc + (item.cantidad * item.precio), 0)
}

const trashItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
}


    return(
        <CartContex.Provider value={{
            cart, 
            isInCart,
            addToCart,
            clearCart,
            itemsInCart,
            totalCart,
            trashItem
        }}>
            {children}
        </CartContex.Provider>
    )
}