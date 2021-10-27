import React from 'react'
import { useRef, useState, useEffect } from 'react'
import Formdata from './Formdata'

import Table from './Table'
function Form() {
    const [page, setPage] = useState(0)
    const [formdata, setFormdata] = useState({
        username: "",
        age: "",
        file: ""
    })
    const [data, setData] = useState([])
    useEffect(() => {
        handleAdd()
    }, [page])
    const handleAdd = () => {

        fetch(`http://localhost:3001/Form?_page=${page}&_limit=3`)
            .then((d) => d.json())
            .then(setData)
    };
    // console.log("data", data)
    const inputRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formdata)
        fetch("http://localhost:3001/Form", {
            method: "POST",
            body: JSON.stringify({
                ...formdata,

            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then()
    };
    const handleurl = (e) => {
        if (e.target.name === "department") {
            fetch(`http://localhost:3001/Form?department=${e.target.value}&_page=${page}&_limit=3`)
                .then((d) => d.json())
                .then(setData)
        }  
        else if (e.target.name == "sort" && e.target.value == "Low To High") {
            fetch(`http://localhost:3001/Form?_sort=salary&_order=asc&_page=${page}&_limit=3`)
                .then((d) => d.json())
                .then(setData)
        }
        else if (e.target.name == "sort" && e.target.value === "High To Low") {
            fetch(`http://localhost:3001/Form?_sort=salary&_order=desc&_page=${page}&_limit=3`)
                .then((d) => d.json())
                .then(setData)
        }
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
        <>
            <div className="col-6">
                <Formdata handleChange={handleChange} handleSubmit={handleSubmit} inputRef={inputRef}></Formdata>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-md-6">
                        <label for="inputState" className="form-label">Filter By Department</label>
                        <select id="inputState" className="form-select" onChange={handleurl} required name="department">
                            <option selected>....</option>
                            <option>Mechnical</option>
                            <option>Electrical</option>
                            <option >Electronics</option>
                            <option>Civil</option>
                            <option>Computer Science</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label for="inputState" className="form-label">Sort by salary</label>
                        <select id="inputState" className="form-select" onChange={handleurl} required name="sort">
                            <option selected>....</option>
                            <option>High To Low</option>
                            <option>Low To High</option>
                        </select>
                    </div>
                </div>

                {
                    data.map((e) => (
                        <Table style={e}></Table>
                    ))
                }
                <div className="center">
                    <button className="next"
                        onClick={() => {
                            setPage(0 <= (page - 1))
                        }}>Priv</button>
                    <button className="next"
                        onClick={() => {
                            setPage((page + 1))
                        }}>Next</button>
                </div>
            </div>
        </>
    )
}

export default Form
