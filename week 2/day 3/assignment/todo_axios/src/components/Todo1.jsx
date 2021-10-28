import React from 'react';
import { useState, useEffect } from "react"
import Counter from './components/Counter';

function Todo1() {
  const [data, setData] = useState([])
  const [text, setText] = useState("")
  const [page, setPage] = useState(1)
  useEffect(() => {
    fetch("http://localhost:3001/Todos").then((d) => d.json()).then((res) => {
      setData(res)
    })

  }, [])
  return (
    <>
      <div className="main">


        <div className="App">
          {data.map((e) => {
            return <div key={e.id}>{e.title}</div>
          })}
        </div>
        {show ? (
          <>
            <Counter />
            <button onClick={
              () => {
                setShow(false)
              }
            }>
              Hide
            </button>
          </>
        ) : (
          <>
            <button onClick={
              () => {
                setShow(true)
              }
            }>
              show
            </button>
          </>
        )

        }
      </div>
    </>

  );
}

export default Todo1;

