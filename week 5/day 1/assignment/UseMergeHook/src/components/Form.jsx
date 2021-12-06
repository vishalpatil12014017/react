import React from 'react'
import {  useState, useEffect } from 'react'
import Formdata from './Formdata'
import axios from 'axios'
import Table from './Table'
function useMergeState() {
    const initState = {
        username: "",
        email: "",
        password: "",
    }
    const [formdata, setFormdata] = useState(initState)
    const [data, setData] = useState([])
    useEffect(() => {
        handleAdd()
    }, [])
    const handleAdd = async () => {
        const { data } = await axios.get("http://localhost:3001/todos", {
        })
        setData(data)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await axios.post("http://localhost:3001/todos", {
            ...formdata
        })
            .then(handleAdd())
            .then(e.target.username.value = "", e.target.email.value = "", e.target.password.value = "",)
            .then(handleAdd())
    };
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormdata({
            ...formdata,
            [name]: type === "checkbox" ? checked : value,
        })
    };
    return {
        data,handleChange,handleSubmit
    }
}
function Form() {
    const {data,handleChange,handleSubmit} = useMergeState()
    return (
        <>
            <div className="row">
                <div className="col-6  mt-4 bg-white p-4">
                    <Formdata handleChange={handleChange} handleSubmit={handleSubmit} ></Formdata>
                </div>
                <div className="col-6">
                    <Table style={data} ></Table>
                </div>
            </div>
        </>
    )
}

export default Form
