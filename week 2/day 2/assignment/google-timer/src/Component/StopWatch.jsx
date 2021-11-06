import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
const StopWatch = (props) => {
    const StopWatch_ref = useRef(null);
    const { initialMinute = 0, initialSeconds = 0, initialMiliSeconds = 0, initialHour = 0 } = props;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [hours, setHours] = useState(initialHour);
    const [MiliSecond, setMiliSecond] = useState(initialMiliSeconds);
    const [show, setShow] = useState(true)
    const [start, setStart] = useState(false);

    const handleStart = () => {
        setShow(false)
        setStart(true)
        StopWatch_ref.current = setInterval(() => {
            if (MiliSecond >= 0) {
                setMiliSecond(MiliSecond + 1);
            }
            if (MiliSecond === 59) {
                setMiliSecond(initialMiliSeconds);
                setSeconds(seconds + 1);
                setMiliSecond(initialMiliSeconds);
            }
            if (seconds === 59) {
                setMiliSecond(initialMiliSeconds);
                setMinutes(minutes + 1);
                setSeconds(initialSeconds);
            }
            if (minutes === 59) {
                setHours(hours + 1)
                setMiliSecond(initialMiliSeconds);
                setMinutes(initialMinute);
                setSeconds(initialSeconds);
            }
        }, 1)

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
        setMiliSecond(initialMiliSeconds)
    }
    useEffect(() => {
        if (start)
            handleStart()
        return () => {
            clearInterval(StopWatch_ref.current);
        };
    });

    return (
        <div className="container">
            <h2 className="m-auto">{hours > 0 ? hours + "hr :" : ""} {minutes > 0 ? minutes + "m :" : ""} {seconds + "s"}:{MiliSecond} </h2>
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
export default StopWatch;