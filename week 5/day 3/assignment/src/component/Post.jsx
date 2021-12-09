import { nanoid } from "nanoid";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { MemTodo } from "./TodoShow";

function Delay(delay,setshow){
    const id = setTimeout(()=>{
        setshow(false)
      
    },delay)
  
    return ()=>clearTimeout(id)
    
}


export const Todo =()=>{
    const [title,setTitle] =useState("");
    const [body,Setbody] = useState("")
    const [todo,setTodo] = useState([]);
    const [show,setshow] =useState(true);
    useEffect(()=>{
            Delay(2000,setshow)
    },[])
    const handleToggle =useCallback((id)=>{
      
         todo.map((el)=>{
            if(el.id===id){
               
                el.status=!el.status
               
            }
            return el
        })
            let t= [...todo]
        setTodo(t)
      

    },[todo]) 

    
   
    console.log("vpost");
    return (show==true?"...loading" :
        <div className="m-auto text-center">
            <input style={{height:"30px",fontSize:"20px",margin:"4%"}} classname="mb-0"placeholder="Enter Title" type="text" onChange={(e)=>{
                setTitle(e.target.value)
            }} />
            <br/>
            <textarea style={{height:"100px",fontSize:"18px"}}placeholder="Enter Post" onChange={(e)=>{Setbody(e.target.value)}} />
            <br/>
            <button className="btn btn-success mt-3" onClick={()=>{
                const payload = {id:nanoid(5),title:title,status:false,body:body}
                setTodo([...todo,payload])
                console.log(payload)
            }}>Post</button>



            {todo.map((el)=>{
               return <MemTodo setTodo={setTodo} todo={todo} key={el.id} title={el.title} status={el.status} id={el.id} body={el.body} handletoggle={handleToggle}/>
            })}
        </div>
    )
}

export const memoTodo = ()=>{

}
