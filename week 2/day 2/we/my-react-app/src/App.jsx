import React from 'react'
import './App.css'
import {useState,useRef,useEffect} from 'react'
import Form from './components/Form'

function App() {
const elementRef = useRef(null)
useEffect(() => {
   elementRef.current.focus()
}, [])
  return (
    
   <div className="App">
       <input type="text" ref={elementRef} />
       <div className="fluid-container" style={{backgroundColor:"blue",height:"300px"}}></div> 
       <div className="fluid-container" style={{backgroundColor:"white",height:"600px"}}></div> 
       <div className="fluid-container" style={{backgroundColor:"black",height:"900px"}}></div>
       <button
      onClick={()=>{
        elementRef.current.scrollIntoView({
          behavior:"smooth"
        })
      }}>Go to Top</button> 
      <Form></Form>
   </div>
  )
}

export default App
