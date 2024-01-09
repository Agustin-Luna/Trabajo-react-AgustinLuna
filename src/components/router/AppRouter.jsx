import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import CartView from '../CartView/CartView'
import Checkout from '../Checkout/Checkout'
import Navbar from '../Navbar/Navbar'
import LoginScreen from '../LoginScreen/LoginScreen'
import Footer from '../footer/Footer'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

const AppRouter = () => {

    const { user } =useContext(userContext)


    return (
        <BrowserRouter>
        <Navbar />
        { user.logged ? (
        <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path="/producto/:categoryId" element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<CartView/>}/>
            <Route path='/checkout' element= {<Checkout/>}/>
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
        ): ( 
        <Routes>
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path='*' element={<Navigate to="/login"/>} />
        </Routes>
        )}
        <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter