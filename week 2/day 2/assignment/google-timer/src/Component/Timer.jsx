import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
const Timer = (props) => {
    const Timer_ref = useRef(null);
    const { initialMinute = 5, initialSeconds = 0, initialHour = 0 } = props;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [hours, setHours] = useState(initialHour);

    const [start, setStart] = useState(false);
    const [show, setShow] = useState(true)
    const handleStart = () => {
        setShow(false)
        setStart(true)
        Timer_ref.current = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                console.log(seconds, minutes, hours)
                if (minutes === 0 && hours === 0) {
                    clearInterval(Timer_ref.current);
                    setStart(false);
                    setShow(true)
                }
            }
            if (minutes === 0 && hours > 0 && seconds > 0) {
                setHours(hours - 1);
                setMinutes(0);
                setSeconds(0);
            }
            if (minutes === 0 && seconds === 0 && hours === 0) {
                clearInterval(Timer_ref.current);
                setStart(false);
                setShow(true)
            }
            if (seconds === 0 && minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            }


        }, 1000)

    }
    const handledStop = () => {
        setStart(false)
        setShow(true)
    }

    const handleReset = () => {
        setStart(false)
        setShow(true)
        setMinutes(initialMinute);
        setHours(initialHour);
        setSeconds(initialSeconds);
    }
    useEffect(() => {
        if (start)
            handleStart()
        return () => {
            clearInterval(Timer_ref.current);
        };
    });

    return (
        <div className="ali_centre">

            <div style={{ display: "flex", margin: "5% 20%" }}>
                <><input className="border" type="number" name="hours" placeholder="0 hours" value={hours} onChange={(e) => {
                    setHours(e.target.value);

                }} /><h3>hr:</h3>
                    <input className="border" type="number" name="minutes" placeholder="0 minutes" value={minutes} onChange={(e) => {
                        setMinutes(e.target.value);

                    }} /><h3>m:</h3>
                    <input className="border" type="number" name="second" placeholder="0 seconds" value={seconds} onChange={(e) => {
                        setSeconds(e.target.value);

                    }} /><h3>s:</h3></>
            </div>
            <br />
            <hr />
            <div className="row">{
                show ?
                    <div className="col"> <button type="button" class="btn btn-primary float-end" onClick={handleStart}>Start</button></div>
                    :
                    <div className="col"> <button type="button" class="btn btn-primary float-end" onClick={handledStop}>Stop</button></div>

            }
                <div className="col"><button type="button" class="btn btn-primary" onClick={handleReset}>Reset</button></div>

            </div>
        </div>
    )
}

export default Timer;