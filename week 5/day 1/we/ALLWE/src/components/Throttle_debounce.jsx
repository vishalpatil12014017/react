import { useState } from 'react';
import React from 'react'
function throttle(fn,wait) {
    let lastCall=0;
    return function () {
        if(Date.now()-lastCall>wait){
            lastCall=Date.now();
            fn()
        }
        
    }
    
}
function debouncer(fn,delay) {
    var debounce;
    return function () {
        debounce && clearTimeout(debounce);
        debounce=setTimeout(function () {
            fn()
            
        },delay)
        
    }
    
}
function Throttle_debounce() {
    const [state, setstate] = useState()
    console.log('state:', state)
    const handlechange=debouncer(e=>setstate(e.target.value),4000)
    return (
        <div>
            <input value={state} type="text" onChange={handlechange}/>
            <button>Search</button>
        </div>
    )
}

export default Throttle_debounce
