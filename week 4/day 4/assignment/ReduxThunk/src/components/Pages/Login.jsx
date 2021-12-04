import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginfail, loginsucces } from '../../store/Auth/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Login() {
    const [formdata, setFormdata] = useState({})
    const { Token } = useSelector(store => store.Auth)

    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = async (e) => {

    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormdata({
            ...formdata,
            [name]: type === "checkbox" ? checked : value,
        })
    };

    if (Token.length != 0) {
        history.replace("/")
    }
    return (
        <div className="p-5 border border-dark m-5 mx-auto bg-white" style={{ maxWidth: "500px", margin: "auto", borderRadius: "20px" }}>
            <h1 className="text-center">Login Here</h1>
            <form onSubmit={handleSubmit}>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onClick={async (e) => {

                    e.preventDefault();
                    await axios.post('https://masai-api-mocker.herokuapp.com/auth/login', {
                        username: formdata.username,
                        password: formdata.password
                    })
                        .then(function (response) {
                            if (response.data.error == true) {
                                dispatch(loginfail(response.data.token))
                                alert("Plese Provide valide information")

                            } else {
                                dispatch(loginsucces(response.data.token))
                                alert("Login Successful")

                            }
                            localStorage.setItem("Token", response.data.token)
                            localStorage.setItem("isAuth", true)
                        })
                }

                }>Submit</button>
            </form>
            <Link to="/register" className="nav-link px-3 m-auto text-center"  >Don't have account</Link>
        </div>
    )
}

export default Login
