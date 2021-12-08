import { useState } from 'react';
import './App.css';
import Button from './Button';

function App() {
  const [count, setCount] = useState(0)
  const handleadd = () =>{
     setCount(count + 5)
  } 

  const handleSub = () =>{
    setCount(count - 5)
 } 
  return (
    <div className="App text-center">
      <h1>Count</h1>
      <h3 data-testid="counter">{count}</h3>
      <Button style="btn btn-success" label="ADD" onClick={handleadd}></Button>
      <Button style="btn btn-danger" label="SUBSTRACT" onClick={handleSub}></Button>
    </div>
  );
}

export default App;
