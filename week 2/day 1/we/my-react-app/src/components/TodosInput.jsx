import React from 'react';
import { useState, useEffect } from 'react';
function TodoInput() {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)
    const [iserror, setIserror] = useState(false)
    // const handleToggle = (id) => {
    //     const updatedTodoList = data.map((e) => {
    //         if (e.id === id) {
    //             e.status = !e.status
    //         }
    //         return e
    //     });
    //     setData(updatedTodoList)
    // };
    const handleRemove = (id) => {
        data.map((e) => {
            if (e.id === id) {
                if (e.status === true) {
                    fetch(`http://localhost:3001/Todos/${id}`, {
                        method: "Delete",
                    }).then(handleAdd)
                }
            }
            return e
        });
    };
    useEffect(() => {
        handleAdd()
    }, [page])
    const handleClick = () => {
        fetch("http://localhost:3001/Todos", {
            method: "POST",
            body: JSON.stringify({
                title: text,
                status: false
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleAdd)


    };
    const handleToggle = (id, st) => {
        setLoading(true)
        fetch(`http://localhost:3001/Todos/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                status: !st
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((d) => d.json())
            .then(handleAdd)
            .catch(err => {
                setIserror(true)
            }).finally(() => {
                setLoading(false)
            })
        console.log(id,st)

    };
    const handleAdd = () => {
        fetch(`http://localhost:3001/Todos?_page=${page}&_limit=3`)
        .then((d) => d.json())
        .then(setData)
        .then(() => {
            setLoading(false)
        })
    };

    return loading ? <h1>Loading.....</h1> : iserror ? <h1>Something went wrong</h1> : (
        <>
            <input type="text" onChange={(e) => {
                setText(e.target.value)
            }} placeholder="Enter todo" />
            <button onClick={handleClick} >+
            </button>
            {data.map((e) => (
                <div className="form-check" style={e.status ? { backgroundColor: "#88fa78", textDecoration: "underline" } : { backgroundColor: "#fac278" }}>
                    <label className="form-check-label" for="flexCheckDefault" style={e.status ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
                        {e.title}
                    </label>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault " style={e.status ? { backgroundColor: "BLUE", textDecoration: "underline" } : { backgroundColor: "red" }}
                        onClick={() => {
                            handleToggle(e.id, e.status);
                        }} />
                    <button style={e.status ? { backgroundColor: "#88fa78" } : { backgroundColor: "#fac278" }} className="float-end" onClick={() => {
                        handleRemove(e.id);
                    }}>X</button>
                </div>
            ))
            }
            <div>
                <button className="next"
                    onClick={() => {
                        setPage(0 <= (page - 1))
                    }}>Priv</button>
                <button className="next"
                    onClick={() => {
                        setPage((page + 1))
                    }}>Next</button>
            </div>
        </>
    );
}

export default TodoInput;
