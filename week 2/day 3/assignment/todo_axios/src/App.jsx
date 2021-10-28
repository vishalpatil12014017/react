import React from 'react';
import './App.css';
import TodoInput from './components/TodosInput';
import "./components/Todo.css"
// const [show, setShow] = useState(true)

function App() {
  return (
    <>
      <div className="todo">
        <TodoInput></TodoInput>
      </div>
    </>

  );
}

export default App;

