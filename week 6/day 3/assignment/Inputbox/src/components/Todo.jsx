import { useState } from "react"
import TodosInput from "./TodosInput"
import Todolist from "./TodoList";

const Todo = () => {
    const [todolist, setTodolist] =useState([]);

    const handleAddTodo = (todo) =>{
        setTodolist([...todolist, todo])
    }
    const handleChangeStatus = (id) => {
        const updateList = todolist.map((todo) => {
            if(todo.id === id){
                todo.status = !todo.status
            }
            return todo
        })
        setTodolist(updateList)
    }
    return (
        <div>
            <h3>Tasks</h3>
            <TodosInput handleAddTodo={handleAddTodo}/>
            <Todolist list={todolist} handleChangeStatus={handleChangeStatus} />
        </div>
    )
}

export default Todo