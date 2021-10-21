import React from 'react';
import { useState } from 'react';
import TodoInput from "./TodosInput";
import List from './TodoList'

function Todo() {
  const [todoList, setTodoList] = useState([]);
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
  return (
    <>
      <div className="todo">

        <List List={todoList} handleToggle={handleToggle} />
        <TodoInput handleAddTodo={handleAddTodo} ></TodoInput>
      </div>

    </>
  );
}
export default Todo;
