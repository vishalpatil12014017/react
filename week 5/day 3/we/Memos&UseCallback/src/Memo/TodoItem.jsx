import React from 'react'

function TodoItem({status,title,handleToggle,id}) {
    return (
        <div>
            <span>{title}</span>: {status?"Done":"Not Done"}
            <button onClick={()=>{
                handleToggle(id)
            }}>Toggle Status</button>
            
        </div>
    )
}
export const MemTodo=React.memo(TodoItem) 
