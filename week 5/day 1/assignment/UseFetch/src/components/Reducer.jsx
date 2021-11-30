import React from 'react'
import { useReducer } from 'react'
const counter = (state, { type, payload }) => {
    switch (type) {
        case "INC_COUNT":
            return {
                ...state,
                count: state.count + payload
            };
        case "DEC_COUNT":
            return {
                ...state,
                count: state.count - payload
            }
        default:
            return state
    }

}
function Reducer() {
    const [state,dispatch]=useReducer(counter,{count:0})
   
    return (
        <div>
            <h1>Counter : {state.count}</h1>
            <button className="btn btn-danger" onClick={()=>{
                dispatch({type:"DEC_COUNT",payload:1})
            }}>Remove</button>
          
            <button className="btn btn-success" onClick={()=>{
                dispatch({type:"INC_COUNT",payload:1})
            }}>Add</button>
            

        </div>
    )
}

export default Reducer
