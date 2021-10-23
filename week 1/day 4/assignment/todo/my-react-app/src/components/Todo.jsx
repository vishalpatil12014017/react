import React from 'react';
import { useState } from 'react';
import TodoInput from "./TodosInput";
import List from './TodoList'

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [showfilter,setShowfilter]=useState(false);
  const handleAddTodo = (todo) => {
    setTodoList([...todoList, todo])
  };
  const handleToggle = (id) => {
    const updatedTodoList = todoList.map((e) => {
      if (e.id === id) {
        e.status = !e.status
      }
      return e
    });
    setTodoList(updatedTodoList)
  };
  const handleRemove = (id) => {
    const updatedTodoList = todoList.filter((e) => {
      if (e.id === id) {
        if (e.status === true) {
          e = !e;
        }
      }
      return e
    });
    setTodoList(updatedTodoList)
  };
  const handleCompleted = (id) => {
    const updatedTodoList = todoList.filter((e) => {
      if (e.status === true) {
        e = !e;
      }
      return e
    });
    setTodoList(updatedTodoList)
  };
  return (
    <>
      <div className="todo">
        <h1>To Do List</h1>
        <List List={showfilter? todoList.filter((e)=>
        e.status):todoList } handleToggle={handleToggle} handleRemove={handleRemove} 
        handleCompleted={handleCompleted}  />
        <TodoInput handleAddTodo={handleAddTodo} ></TodoInput>
        <div className="butto">
          <button className="btn btn-primary" onClick={()=>{
            setShowfilter(!showfilter)
            
          }}>{showfilter? "All Todoes": "Show Completed"}</button>
        </div>
      </div>

    </>
  );
}
export default Todo;
