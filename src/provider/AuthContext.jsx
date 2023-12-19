import React, { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const context = createContext(null);
const AuthContext = ({children, data}) => {
    console.log(children);
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user 
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // social Login(google)
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // sign out 

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // creating observer 

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = {
        createUser,
        logInUser,
        googleLogIn,
        logOut,
        user,
        loading
    }
    return (
        <context.Provider value={authInfo}>
            {
                children
            }
        </context.Provider>
    );
};

export default AuthContext;