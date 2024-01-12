import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase/config';

export const userContext = createContext();  

export const UserProvider = ({ children }) => {  
    const [user, setUser] = useState({
        email: null,
        logged: false,
        uid: null,
    });


    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const logGoogle = () => {
        signInWithPopup(auth, provider)
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser({
                    email: user.email,
                    uid: user.uid,
                    logged: true
                })
            }else {
                setUser({
                    email: null,
                    uid: null,
                    logged: false
                })
            }
        })
    }, [])


    const logOut = () => {
        signOut(auth)
    }



    return (
        <userContext.Provider value={{ user, login, register, logOut, logGoogle}}>  
            {children}
        </userContext.Provider>
    );
}