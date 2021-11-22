import { createContext } from "react";
import { useState } from "react";
export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [Token, setToken] = useState("")
    const handleTokenchange=(e)=>{
        setToken(e)
    }
    return <AuthContext.Provider value={{Token,handleTokenchange}}>{children}</AuthContext.Provider>
}