import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const registerUser = (email, password)=>{
        return createUserWithEmailAndPassword( auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loginUser =>{
            console.log(loginUser);
            setUser(loginUser)
        })
        return ()=>{
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loginUser,
        registerUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;