import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/context/CartContext'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/footer/Footer'







function App() {


  return (
    <CartProvider>

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path="/producto/:categoryId" element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<CartView/>}/>
        <Route path='/checkout' element= {<Checkout/>}/> 
      </Routes>

    <Footer/>
    </BrowserRouter>

    </CartProvider>
)
}

export default App
