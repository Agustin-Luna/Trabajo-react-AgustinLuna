import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/context/CartContext'
import CartView from './components/CartView/CartView'





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
      </Routes>

    </BrowserRouter>

    </CartProvider>
)
}

export default App
