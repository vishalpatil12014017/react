import React, { useState } from 'react'
import { useMemo } from 'react'
function Fibonachi() {
    const [num, setNum] = useState(0)
    const [, forcerender] = useState(0)
    const factorial = useMemo(() => fibonachialgo(num), [num])
    const handlechange = (e) => {
        setNum(e.target.value)
    }
    return (
        <div style={{ margin: "auto", textAlign: "center" }}>
            <h1>
                Factorial of {num} is {factorial}
            </h1>
            <input type="text"
                value={num}
                placeholder="Enter value Here"
                onChange={handlechange}
            />
        </div>
    )
}
function fibonachialgo(num) {
    if (num < 2) {
        return num;

    } else {
        return  fibonachialgo(num - 1)+fibonachialgo(num - 1);
    }
}

export default Fibonachi
