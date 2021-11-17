import { createContext } from "react";
import { useState } from "react";
export const ThemeContext=createContext();
export const ThemeContextProvider=({children})=>{
    const [Toggle, setToggle] = useState(true)
    const handlestatus=(e)=>{
        setToggle(e)
    }
    return <ThemeContext.Provider value={{Toggle,handlestatus}}>{children}</ThemeContext.Provider>
}