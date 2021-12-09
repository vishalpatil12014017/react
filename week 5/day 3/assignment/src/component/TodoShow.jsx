import React, { useEffect, useState } from "react"


function randomColor() {
    var rc = Math.floor(Math.random() * 16777215).toString(16);
    return (rc)
}

function Delay(delay, setColor) {
    let color;
    const id = setTimeout(() => {
        color = randomColor();
        setColor(`#${color}`)

    }, delay)

    return () => clearTimeout(id)

}

export const InputType = ({ title, body, status, id, handletoggle }) => {
    const [color, setColor] = useState("white");
    useEffect(() => {
        Delay(2000, setColor);

    }, [])
    const verified = {
        backgroundColor: `rgb(${Math.random(100)},${Math.random(50)},${Math.random(20)}`,
        border: "1px solid red",
        color: "white",
        maxWidth: "400px",
        margin: "auto"
    }
    const not = {

        border: "1px solid red",
        color: "white",
        margin: "3%",
        maxWidth: "400px",
        margin: "auto"
    }


    console.log("vshow");

    return (
        <div className="mt-4 text-center" style={status ? verified : not}>
            <span >
                <div style={{ display: "flex" }}>
                    <div style={{ border: "1px solid black", margin: "5%", backgroundColor: `${color}`, height: "40px", width: "10%" }}></div>
                   
                </div>
                <h3 >Title : {title}</h3>

                <p >Body : {body}</p>

                <button onClick={() => {
                    handletoggle(id);
                }} className="btn btn-primary m-3">Verify</button>
            </span>
        </div>
    )
}

export const MemTodo = React.memo(InputType)