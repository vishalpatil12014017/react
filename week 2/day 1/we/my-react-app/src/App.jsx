import React from 'react';
import './App.css';
import Counter from './components/Counter';
import TodoInput from './components/TodosInput';
import "./components/Todo.css"
// const [show, setShow] = useState(true)

function App() {
  return (
    <>
      <div className="main">
        <Counter start="10" end="15"></Counter>
      </div>
      <div className="todo">
        <TodoInput></TodoInput>
      </div>
    </>

  );
}

export default App;

