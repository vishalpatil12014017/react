import { useContext } from "react"
import Head from "./Head"
import User from "./User"
import { ThemedContext } from "./context/ThemedContext";

const styles =  {
    light:{
        backgroundColor:"#FFFFFF"
    },
    dark:{
        backgroundColor: "#050505",
        
    },
    activeLight:{
        color:"#31394D"
    },
    activeDark:{
        color:"#FFFFFF"
    },
    bglight:{
        backgroundColor:"white"
    },
    bgdark:{     
        backgroundColor:"black"
    }

}

const Main = () => {
    const { theme, handlethemeChange } = useContext(ThemedContext);
    return (
       <>
            <div className="border border-dark p-4 m-auto mt-5" style={{maxWidth:"500px"}}>
            <div className="dashboard p-4">
                <div>My Dashboard</div>
                <button className="btn btn-primary" onClick={() => {
                    theme === "light" ? handlethemeChange("dark") : handlethemeChange("light")
                }}>{theme === "light" ? "Dark" : "Light"}</button>
            </div>
            <div className="container p-4" style={theme === "light" ? styles.light : styles.dark}>
                <Head></Head>
                <User levelImg="progress1.png" image="photo1.png" name="Vishal" city="Maharashtra, India" level="15" points="1718"></User>
                <User levelImg="progress2.png" image="photo2.png" name="Kirti" city="Maharashtra, India" level="11" points="1819"></User>
                <User levelImg="progress3.png" image="photo3.png" name="Vikas" city="Maharashtra,India" level="10" points="1212"></User>
                <div className="line"></div>

            </div>

        </div>
       </>
    )
}

export default Main
