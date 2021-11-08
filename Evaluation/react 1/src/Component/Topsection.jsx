import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function Topsection({ handleAddCurrentInventry, handleAddtoOrderInventry }) {
    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleClickforCurrent = (e) => {
        const data = {
            id: nanoid(6),
            title: text,
            status: false,
            stock: true,
        };
        handleAddCurrentInventry(data);
        setText("")
    }
    const handleClickforfuture = (e) => {
        const data = {
            id: nanoid(6),
            title: text,
            status: false,
            stock: false,
        };
        handleAddtoOrderInventry(data);
        setText("")
    }
    return (
        <>

            <div className="row">
                <div className="col col-3"></div>
                <div className="col btn-group">
                    <input type="text" value={text} onChange={handleChange} placeholder="Add Product" />
                    <button type="button" className="btn btn-outline-primary" onClick={handleClickforCurrent}>Add to Inventry</button>
                    <button type="button " className="btn btn-outline-primary" onClick={handleClickforfuture}>Add to Orderlist</button>
                </div>
                <div className="col col-3"></div>
            </div>


        </>
    )
}

export default Topsection
