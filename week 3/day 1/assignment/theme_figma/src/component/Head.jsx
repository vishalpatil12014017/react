import { useContext } from "react"
import { ThemedContext } from "./context/ThemedContext"
const styles =  {
    Light:{
        color:"#31394D"
    },
    Dark:{
        color:"#FFFFFF"
    },  
}
const Head = () => {
    const {theme} = useContext(ThemedContext)
    return (
       <>
            <div >
            <div style={theme === "light" ? styles.Light : styles.Dark} >All Active Users</div>
            <div className="dateSection" style={theme === "light" ? styles.Light : styles.Dark}><span>for</span> August 2021 <img src="dropdown.png" alt="" /></div>
        </div>
       </>
    )
}

export default Head
