import React from 'react'
import { decCounter, incCounter } from "../../store/Counter/actions";
import {useSelector,useDispatch} from 'react-redux'

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector(store => store.counter.count)
    return (
        <div className="container p-4 border border-dark m-5 mx-auto bg-white text-center" style={{ maxWidth: "500px", borderRadius: "15px" }}>
            <h1>Counter : {count}</h1>
            <div className="btn-group pt-3" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-danger mx-2 px-4" onClick={ ()=>{
                    dispatch(decCounter(1))
                }} >-</button>
                <button type="button" className="btn btn-primary mx-2 px-4" onClick={()=>{
                      dispatch(incCounter(1))
                }} >+</button>

            </div>

        </div>
    )
}

export default Counter
