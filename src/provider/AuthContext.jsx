import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
import { axiosPublic } from '../api';
import axios from 'axios';
export const context = createContext(null);
const AuthContext = ({ children }) => {
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
    const updateUser = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
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
            setUser(currentUser);
            const userEmail = currentUser?.email || user?.email;
            setLoading(false);
            if (currentUser) {
                const fetchData = async () => {
                    const res = await axiosPublic.post('/jwt', { loggedUser: userEmail });
                    console.log('token:', res.data);
                }
                fetchData();
            }

            else {
                const fetchData = async () => {
                    const res = await axiosPublic.post('/logout', {
                        loggedUser: userEmail
                    });
                    console.log('res:', res.data);
                }
                fetchData();
            }

        })
        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = {
        createUser,
        logInUser,
        updateUser,
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