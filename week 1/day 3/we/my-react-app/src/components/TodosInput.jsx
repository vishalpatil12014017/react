import React from 'react';
import { useState } from 'react';
import {nanoid} from 'nanoid'
function TodoInput({ handleAddTodo }) {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value)
    };
    const handleClick = () => {
        const data={
            id:nanoid(6),
            title:text,
            status:false
        };
        handleAddTodo(data)
        setText("")
    };

    return (
        <>
            <input type="text" value={text} onChange={handleChange} placeholder="Enter todo" />
            <button onClick={handleClick}>+
            </button>
        </>

    );
}

export default TodoInput;
