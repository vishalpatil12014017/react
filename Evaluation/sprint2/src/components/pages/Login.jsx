import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginsucces } from '../store/Auth/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function Login() {
    const [formdata, setFormdata] = useState({})
    const { Token } = useSelector(store => store.Auth)
    const dispatch = useDispatch()
    const history =useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/register', {
            email: formdata.email,
            password: formdata.password
        })
            .then(function (response) {
                const action=loginsucces(response.data.token)
                localStorage.setItem("Token",response.data.token)
                localStorage.setItem("isAuth",true)
                dispatch(action)
            })
    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormdata({
            ...formdata,
            [name]: type === "checkbox" ? checked : value,
        })
    };


    return (
        <div className="p-5 border border-dark m-5 mx-auto bg-white" style={{maxWidth:"500px",margin:"auto"}}>
            <h1 className="text-center">Login Here</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onClick={(e) => {
                     
                    handleSubmit(e)
                   !Token? alert("Login Successful")  : alert("Plese Provide valid Information")
                  history.push("/")
                   
                }

                }>Submit</button>
            </form>
        </div>
    )
}

export default Login
