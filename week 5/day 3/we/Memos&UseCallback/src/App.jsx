import './App.css'
import {Calender} from './Memo/Calender';
import { MemoisCalender } from './Memo/Calender';
import Factorial from './Memo/Factorial';
import Fibonachi from './Memo/Fibonachi';
import { useState } from 'react';
import Todos from './Memo/Todos';
function App() {
  const [,forcerender]=useState(0)
  return (
    <>
    <Calender date="02/12/2021" memo={true}></Calender>
    <MemoisCalender date="02/12/2021" memo={false}></MemoisCalender>
    <button onClick={()=>{
      forcerender((p)=>p+1)
    }}>forcerender</button>
     <Factorial></Factorial>
     <Fibonachi/>
     <hr />
     <Todos></Todos>
    </>
   
  );
}
export default App;
