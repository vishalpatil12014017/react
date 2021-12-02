import React, { useState } from 'react'
import {nanoid} from"nanoid"
import { MemTodo } from './TodoItem'
import { useCallback } from 'react'
function Todos() {
    const [text, setText] = useState('')
    const [todolist, setTodolist] = useState([])
    const handleToggle=useCallback(
        (id) => {
           console.log(id);
        },
        [],
    )
    return (
        <div style={{textAlign:"center"}}>
            <h1>Todos</h1>
            <input type="text"
            placeholder="Enter Todos Here"
            value={text}
            onChange={(e)=>setText(e.target.value)} />
            <button onClick={()=>{
                setTodolist([
                    ...todolist,
                    {id:nanoid(6),status:false,title:text}
                ])
            }}>Add Todo</button>
            {
                todolist.map((e,i)=>{
                    return<MemTodo key={i} {...e} handleToggle={handleToggle}></MemTodo>
                })
            }
        </div>
    )
}

export default Todos
