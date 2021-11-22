import { createContext } from "react";
import { useState } from "react";
export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [Token, setToken] = useState("")
    const [Meal, setMeal] = useState([])
    const handleTokenchange=(e)=>{
        setToken(e)
    }
    const handleMealchange=(e)=>{
        setMeal(e)
    }
    return <AuthContext.Provider value={{Token,handleTokenchange,handleMealchange,Meal}}>{children}</AuthContext.Provider>
}