import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Addtodossuccess, Addtodosloading, Addtodoserror, gettodosloading, gettodossuccess, gettodoserror } from "../../store/Todos/actions"
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Toolbar = styled.header`
.todo{ 
       width: 40%;
       text-align: center;
       margin: auto;
       margin-top: 30px;
       background-color: rgb(206,206,206);
       border-radius: 25px;
       padding: 10px;
       border-radius: 1px solid red;
}
.todo>input{
    margin-top: 10px;
    margin-bottom: 0px;
    border-style: none;
    background-color: white;
    padding: 10px;
    width: 60%;
    border-radius: 15px;
    font-size: 30px;
    border: 1px solid red;
}
.todo>button{
   
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    border-style: none;
    background-color: white;
    width: 60px;
    padding: 10px;
    border-radius: 15px;
    font-size: 30px;
    border: 1px solid red;
}
.form-check{
    margin: auto;
    margin-top: 40px;
    margin-bottom: 10px;
    border-style: none;
    background-color: white;
    text-align: left;
    padding: 8px;
    width: 69%;
    border-radius: 15px;
    font-size: 30px;

}
.form-check-input{
    background-color: red;
}
.float-end{
    border: none;
    background-color: white;
    font-weight: 100;
}
.butto>button{
    border: 1px solid red;
    padding: 10px 15px 10px 15px;
    border-radius: 10px;
    font-size: 20px;
}
`
function Todos() {
    const [text, setText] = useState("")
    var count = 0
    const dispatch = useDispatch()
    const { loading, error, data } = useSelector(store => store.todos.todos)
    useEffect(() => {
        getdata()
    }, [])
    const getdata = async () => {
        dispatch(gettodosloading())
        try {
            const { data } = await axios.get("http://localhost:3001/todos")
            dispatch(gettodossuccess(data))

        } catch (err) {
            dispatch(gettodoserror(err))
        }
    }
    const handleToggle = (id, st) => {
        axios.patch(`http://localhost:3001/todos/${id}`, {
            status: !st
        }
        )
            .then(getdata())
    }
    const handleRemove = (id) => {
        axios.delete(`http://localhost:3001/todos/${id}`).then(getdata)
    }
    data.map((e) => {
        if (e.status === false) {
            count++
        }
    })
    return (
        <Toolbar>
            {
                loading ? <h1>...loading</h1> :
                    <div className="text-center p-4 bg-white m-auto mt-5 todo" style={{ maxWidth: "500px" }}>
                        <h1>Todos</h1>
                        <input placeholder="Enter Your Todo" type="text" value={text} onChange={(e) => {
                            setText(e.target.value)
                        }} />
                        <button onClick={async () => {
                            dispatch(Addtodosloading())
                            const payload = {
                                id: uuidv4(),
                                status: false,
                                title: text
                            }
                            try {
                                const { data } = await axios.post("http://localhost:3001/todos", payload)
                                dispatch(Addtodossuccess(data))
                                getdata()
                                setText("")
                            } catch (err) {
                                dispatch(Addtodoserror(err))
                            }



                        }}>+</button>
                        <div>
                            {
                                data.map((e) => (
                                    <div key={e.id}>

                                        <div className="form-check" style={e.status ? { backgroundColor: "#88fa78", textDecoration: "underline" } : { backgroundColor: "#ffdfb6" }}>

                                            <Link to={`/todo/${e.id}`}> <label className="form-check-label" for="flexCheckDefault" style={e.status ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
                                                {e.title}
                                            </label></Link>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required="true" style={e.status ? { backgroundColor: "#88fa78" } : { backgroundColor: "#ffdfb6" }}
                                                onClick={() => {
                                                    handleToggle(e.id, e.status);
                                                }}
                                            />
                                            <button style={e.status ? { backgroundColor: "#88fa78" } : { backgroundColor: "#ffdfb6" }} className="float-end"
                                                onClick={() => {
                                                    handleRemove(e.id);
                                                }}
                                            >X</button>
                                        </div>

                                    </div>

                                ))
                            }

                        </div>
                        <h4 className="pt-4">Incomplete Task : {count}</h4>
                    </div>
            }
        </Toolbar>
    )
}

export default Todos
