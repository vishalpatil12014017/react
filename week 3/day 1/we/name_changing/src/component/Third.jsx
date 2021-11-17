import React from 'react'
import { useContext } from 'react'
import { AppContext } from './AppContext'
import { AuthContext } from './AuthContext'
function Third() {
    const {age,handlechange,name}= useContext(AppContext)
    const {Token,handleTokenchange}= useContext(AuthContext)
    return (
        <div>
             <div>
                Token:{Token}
               <div>
               <button onClick={()=>{
                    handleTokenchange("Vishal")
                }}>Change Token</button>
               </div>
            </div>
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
