import { createContext, useState } from "react";

export const ThemedContext = createContext();

export const ThemedContextProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    const handlethemeChange = (data) => {
        setTheme(data)
    }
    return <ThemedContext.Provider value={{theme, handlethemeChange}}> {children}</ThemedContext.Provider>
}