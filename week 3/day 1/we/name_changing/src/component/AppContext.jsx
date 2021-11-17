import { createContext } from "react";
import { useState } from "react";
export const AppContext=createContext();
export const AppContextProvider=({children})=>{
    const [state, setstate] = useState("NoOne")
    const handlechange=(e)=>{
        setstate(e)
    }
    return <AppContext.Provider value={{name:state,age:22,handlechange}}>{children}</AppContext.Provider>
}