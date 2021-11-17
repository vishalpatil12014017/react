import React from 'react'
import { useContext } from 'react'
import { AppContext } from './AppContext'
function Third() {
    const {age,handlechange,name}= useContext(AppContext)
    return (
        <div>
            Name : {name} & age : {age}
           <div>
           <button onClick={()=>{
                handlechange("Vishal")
            }}>Change Name</button>
           </div>
        </div>
    )
}

export default Third
