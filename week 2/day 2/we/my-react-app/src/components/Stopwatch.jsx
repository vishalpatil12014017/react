import React from 'react'
import {useState,useRef,useEffect} from 'react'

function Stopwatch() {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)
  
    useEffect(() => {
      countRef.current=setInterval(() => {
        setCount((p)=>p+1)
      }, 1000);
    }, [])
  
    const handlestart=()=>{
      countRef.current=setInterval(() => {
        setCount((p)=>p+1)
      }, 1000);
    }
    return (
        <div >
        Timer: {count}
        <button onClick={()=>{
          clearInterval(countRef.current)
        }}>Pause</button>
        <button onClick={()=>{
          handlestart()
        }}>
          Resume
        </button>
        <button onClick={()=>{
          setCount(0)
        }}>
          Reset
        </button>
      </div>
    )
}

export default Stopwatch
