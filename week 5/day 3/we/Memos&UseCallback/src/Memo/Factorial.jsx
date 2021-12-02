import React, { useState } from 'react'
import { useMemo } from 'react'
function Factorial() {
    const [num, setNum] = useState(0)
    const [, forcerender] = useState(0)
    const factorial = useMemo(() => factorialalgo(num), [num])
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
function factorialalgo(num) {
    if (num == 0 || num == 1) {
        return 1;

    } else {
        return num * factorialalgo(num - 1);
    }
}

export default Factorial
