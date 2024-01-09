import './LoginScreen.css'
import { useContext, useState } from 'react'
import { userContext } from '../context/UserContext'

const LoginScreen = () => {
const { login, register, logGoogle } = useContext (userContext) 


    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const handleInputChange = (e) => {
        setValues({
            ...values ,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }


    return (
        <div className="login-c">
            <div className="p-4 rounded bg-white w-80">
                <h2 className="text-2xl font-semibold">Login</h2>
                <hr />

                <form onSubmit={handleSubmit} className='mt-4'>
                <input
                    className="border p-2 font-semibold"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleInputChange}
                    name="email"
                />
                <input
                    className="border p-2 font-semibold"
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleInputChange}
                    name="password"
                />
                <button type="submit" className="bg-black rounded flex items-center py-2 px-4 text-center justify-center text-white font-semibold my-4">Ingresar</button>
                </form>
                <button onClick={() => register(values)} className="bg-black rounded flex items-center py-2 px-4 text-center justify-center text-white font-semibold my-4">Registrar</button>
                <button onClick={logGoogle} className="bg-black rounded flex items-center py-2 px-4 text-center justify-center text-white font-semibold my-4">
                    Registrarse con Google
                    <i className="bi bi-google ml-2"></i>
                </button>
            </div>
        </div>
    )
}

export default LoginScreen