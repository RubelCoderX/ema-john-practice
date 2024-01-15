import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, SetUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //  firebase code for signup 
    const createUser =(email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // firebase code for login 
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // firebase code for logout 
    const logOut = () =>{
        return signOut(auth);
    }
    // observe user auth state 
    useEffect(() =>{
        const unsubscribe =  onAuthStateChanged(auth, currenUser =>{
            SetUser(currenUser); 
            setLoading(false);   
        });
        // stop observing while unmounting 
        return () =>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;