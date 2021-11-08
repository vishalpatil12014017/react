import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function Topsection() {
    const [text,setText]=useState("")
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleClick=(e)=>{
        const data={
            id:nanoid(6),
            title:text,
            status:false
        };
        // handleAddinventry(data);
        // setText("")
    }
    return (
        <div>
            <input type="text" value={text} onChange={handleChange} placeholder="Add Product" />
            <button value={1} onClick={handleClick}>Add to Inventry</button>
            <button value={2} onClick={handleClick}>Add to Orderlist</button>
        </div>
    )
}

export default Topsection
