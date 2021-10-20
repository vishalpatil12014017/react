import React from 'react';
import { useState } from 'react';


function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value)
  };
  const handleAddTodo = () => {
    setTodos([...todos, text])
    setText("")
  };

  return (
    <>
      <div className="todo">
        {todos.map((e) => (
          <div className="form-check">
            <label className="form-check-label" for="flexCheckDefault">
              {e}
            </label>
            <input className="form-check-input float-end" type="radio" value="" id="flexCheckDefault" />
          </div>
        ))}
        <input type="text" value={text} onChange={handleChange} placeholder="Enter todo" />
        <button onClick={handleAddTodo}>+
        </button>
      </div>
    </>

  );
}

export default Todo;
