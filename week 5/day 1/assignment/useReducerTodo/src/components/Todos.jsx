import { useState, useEffect } from "react";
import { useReducer } from "react";
import axios from 'axios'

const styles ={
    main:{
        width:"400px",
         margin:"auto" 
    },
    mBottom:{
        marginBottom:"20px"
    }
    

}
const reducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD":
            return {
                ...state,
                todos: [...state.todos, payload]
            };
        case "GET":
            return {
                ...state,
                todos: payload
            };
        default:
            return state
    }

}

const Todos = () => {
    const [text, setText] = useState("");
    const [state, dispatch] = useReducer(reducer, { todos: [] })
    const handleChange = ({ target }) => {
        setText(target.value)
    }
    useEffect(() => {
        getData()

    }, [])
    const getData = async () => {
        const { data } = await axios.get("http://localhost:3001/todos")
        dispatch({ type: "GET", payload: data })
    }

    const handleAdd = async () => {
        let payload = {
            title: text,
            status: false,
        }
        const { data } = await axios.post("http://localhost:3001/todos", payload)
        dispatch({ type: "ADD", payload: data })
    }


    return (
        <div>
            <input type="text"
                placeholder="enter here"
                onChange={handleChange}
                value={text} />
            <button className="btn-primary" onClick={handleAdd}>Add task</button>
            <br /><br />
            <div className="container" style={styles.main}>
                {
                    state.todos.map((e) => (
                        <div key={e.id} className="row mb-4">
                            <div className="col bg-white">{e.title}</div>
                            <div className="col btn-success">{e.status ? "DONE" :" NOT DONE"}</div>
                        </div>
                    ))
                }
            </div>
            <div></div>
        </div>
    )
}

export default Todos