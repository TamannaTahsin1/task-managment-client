import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {  getAuth, onAuthStateChanged, signOut, } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ( {children}) => {

     //*email login and google login states*/ 
     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true)
    //  * keep login user*/
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false);
        });
        return() =>{
            return unsubscribe()
        }
    },[])
         //*  for logout */
         const logOut = () =>{
            setLoading(true);
            return signOut()
         }
    const authInfo = {
        user,
        loading,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;