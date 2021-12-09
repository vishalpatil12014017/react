import React, { useRef } from 'react'
import { useState, useEffect } from 'react';



function Delay(delay,sethide){
    
    const id = setTimeout(()=>{
        sethide(false)
      
    },delay)
  
    return ()=>clearTimeout(id)
    
}

const StopWatch = (props) => {
    const StopWatch_ref=useRef(null);
    const [hide,SetHide] = useState(true)
    const {initialMinute =0,initialSeconds = 0,initialHour=0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    const [hours, setHours ] =  useState(initialHour);
   
    const [show,setShow] = useState(true)
    const [start,setStart]=useState(false);
  
    const handleStart=()=>{
        setShow(false)
        setStart(true)
        StopWatch_ref.current = setInterval(() => {
           
           setSeconds(seconds+1)
            if(seconds===59){
               
                setMinutes(minutes+1);
                setSeconds(initialSeconds);
            }
            if(minutes===59){
                setHours(hours+1)
              
                setMinutes(initialMinute);
                setSeconds(initialSeconds);
            }
        }, 1000)
       
    }
    const handledStop =()=>{
        setStart(false)
        setShow(true)
    }

    const handleReset = ()=>{
        setStart(false)
        setShow(true)
        setMinutes(initialMinute);
        setHours(initialHour);
        setSeconds(initialSeconds);
        
    }
    useEffect(()=>{
        Delay(2000,SetHide)
        if(start)
       handleStart()
        return ()=> {
            clearInterval(StopWatch_ref.current);
          };
    });
    console.log("vtimer");
    
    return <div  className="text-center bg-white p-4 container "style={{border:"10px"}}   >
           
                 <h2 >{hours+"hr :"} {minutes+"m :"} {seconds+"s"} </h2>
               <br/>
               <hr/>
               <div className="fix"> {
                show?
                <button className="btn btn-success mx-2" onClick={handleStart}>Start</button>
                :
                <button className="btn btn-danger mx-2" onClick={handledStop}>Stop</button>
                 }
               <button className="btn btn-primary mx-2" onClick={handleReset}>Reset</button>
              
            </div>
        </div>
}

export default StopWatch;