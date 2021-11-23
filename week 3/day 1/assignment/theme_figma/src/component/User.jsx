
import { useContext } from "react"
import { ThemedContext } from "./context/ThemedContext"

const styles =  {
    activeLight:{
        color:"#31394D"
    },
    activeDark:{
        color:"#FFFFFF"
    },  
}
const User = ({name, city, level, image, levelImg}) => {

    const {theme} = useContext(ThemedContext)
    return (
       <>
            <div >
            <div >
                <div className="">
                    <img src={image} alt=""  />
                </div>

                <div style={theme === "light" ? styles.activeLight : styles.activeDark}>
                    {name}
                    <br />
                    <span>{city}</span>
                </div>

                <div className="dots">
                    ...
                </div>
            </div>

            <div >
                <img src={levelImg} alt="" />
                <div className="levelData">
                    <div style={theme === "light" ? styles.activeLight : styles.activeDark}>Professional level {level}</div>
                </div>
            </div>
        </div>
       </>
    )
}

export default User
