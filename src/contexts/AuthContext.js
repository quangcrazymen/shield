import React,{ useContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const AuthContext = React.createContext()
//WHAT IS USECONTEXT, USEHISTORY, AUTH
//https://viblo.asia/p/react-router-v6-gGJ59oVpZX2
export const useAuth = ()=>useContext(AuthContext)

export const AuthProvider = ({children}) =>{
    const [loading, setLoading] = useState(true)
    const [user,setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        auth.onAuthStateChanged((user=>{
            setUser(user)
            setLoading(false)
            if(user) navigate('/home')
        }))
    },[user,navigate])

    const value = {user}

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}
//change when ever we add a user or navigate 