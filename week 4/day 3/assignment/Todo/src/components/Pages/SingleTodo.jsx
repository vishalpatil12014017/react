import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router'
const Toolbar = styled.header`
.todo{ 
       width: 100%;
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
    width: 90%;
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
    padding: 10px;
    border-radius: 15px;
    font-size: 30px;
    border: 1px solid red;
}
`
function SingleTodo() {
    const id = useParams()
    const { data } = useSelector(store => store.todos.todos)
    const value = data.filter(e => e.id === id.id)
    const history=useHistory()
    const [text, setText] = useState("")
    return (
        <Toolbar>
            <div className="text-center p-4 m-auto mt-4 bg-white " style={{ maxWidth: "500px" }}>
                {
                    value.map((e) => (
                        <div className="todo">
                            <h1 className="text-center">Title : {e.title}</h1>
                            <input type="text" placeholder="Enter New Title" value={text} onChange={(e) => {
                                setText(e.target.value)
                            }}
                            />

                            <button onClick={async () => {
                                const payload = {
                                    title: text
                                }
                                try {
                                    const { data } = await axios.patch(`http://localhost:3001/todos/${e.id}`, payload)
                                    setText("")
                                } catch (err) {
                                }

                                history.push("/todos")

                            }}>Edit Here</button>
                        </div>
                    ))
                }
            </div>
        </Toolbar>
    )
}

export default SingleTodo
