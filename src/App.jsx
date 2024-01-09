import './App.css'
import { CartProvider} from './components/context/CartContext'
import { UserProvider} from './components/context/UserContext'
import AppRouter from './components/router/AppRouter'






function App() {


  return (
    <UserProvider>
    <CartProvider>
    <AppRouter/>
    </CartProvider>
    </UserProvider>
)
}

export default App
