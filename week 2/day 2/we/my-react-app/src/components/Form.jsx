import React from 'react'
import { useRef, useState } from 'react'
function Form() {
    const [formdata, setFormdata] = useState({
        username: "",
        age: "",
        ismarried: []
    })
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata)
    };
    const handleChange = (e) => {
        const file = inputRef.current.files[0];
        const { name, value, type, checked } = e.target;
        setFormdata({
            ...formdata,
            [name]: type === "checkbox" ? checked : value

        })
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="Enter name"
                    name="username" id=""
                />
                <br />
                <input
                    type="number"
                    onChange={handleChange}
                    placeholder="Enter age"
                    name="age" id=""
                />
                <br />
                ismarried:
                <input type="checkbox" name="isMarried" onChange={handleChange} id="" />
                <br />
                <select name="country" onChange={handleChange} id="">
                    <option value="India">India</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Nepal">Nepal</option>
                </select>
                <br />
                <input type="file" onChange={handleChange} ref={inputRef} name="" id="" />
                <input type="submit" value="submit" name="" id="" />
            </form>
        </div>
    )
}

export default Form
