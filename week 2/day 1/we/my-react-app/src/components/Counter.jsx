import React from 'react'
import {useEffect,useState} from 'react'

function Counter(props) {
    const [count, setCount] = useState(Number(props.start))
    useEffect(() => {
        const id=setInterval(() => {
            setCount((next)=>{
                if(next===Number(props.end)){
                    clearInterval(id)
                    return 0;
                }
                return next+1
            });
        }, 1000); 
        return ()=>{
            clearInterval(id)
        }
    }, [])
    return (
        <div>
            <h1>Count : {count}</h1>
            <h3>Start : {props.start} & End : {props.end}</h3>
        </div>
    )
}

export default Counter
