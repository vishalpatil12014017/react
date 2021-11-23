import React from 'react'
import { store } from '../../store'
import { decCounter, incCounter } from "../../store/actions";
import { useState } from 'react';

function Counter() {
    const { count } = store.getState()
    const [state, setstate] = useState(0)
    const { dispatch } = store
    const forceupdate = () => setstate(state + 1)
    const handleadd = () => {
        dispatch(incCounter(1))
        forceupdate()
    }
    const handleremove = () => {
        dispatch(decCounter(1))
        forceupdate()
    }
    return (
        <div className="container p-4 border border-dark m-5 mx-auto bg-white text-center" style={{ maxWidth: "500px", borderRadius: "15px" }}>
            <h1>Counter : {count}</h1>
            <div className="btn-group pt-3" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-danger mx-2 px-4" onClick={handleremove} >-</button>
                <button type="button" className="btn btn-primary mx-2 px-4" onClick={handleadd} >+</button>

            </div>

        </div>
    )
}

export default Counter
