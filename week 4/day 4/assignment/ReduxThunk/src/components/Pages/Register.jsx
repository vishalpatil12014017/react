import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerfail, registersucces } from '../../store/Auth/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function Register() {
    const [formdata, setFormdata] = useState({})
    const { error, MESSAGE } = useSelector(store => store.Register)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = (e) => {

    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormdata({
            ...formdata,
            [name]: type === "checkbox" ? checked : value,
        })
    };
    // const handlemessage = () => {

    //     !error ? history.replace("/about") : history.replace("/register")
    //     if (MESSAGE != null) {
    //         alert(MESSAGE)
    //     }

    // }



    return (
        <div className="p-5 border border-dark m-5 mx-auto bg-white" style={{ maxWidth: "500px", margin: "auto", borderRadius: "15px" }}>
            <h1 className="text-center">Register Here</h1>
            <form >
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter Your Name" aria-label="Username" aria-describedby="basic-addon1" name="name" onChange={handleChange} />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mobile</label>
                    <input type="number" className="form-control" name="mobile" onChange={handleChange} />
                </div>
                <div class="input-group">
                    <textarea class="form-control" placeholder="Enter Your Description" aria-label="With textarea" onChange={handleChange} name="description"></textarea>
                </div>

                <button type="submit" className="btn btn-primary mt-2" onClick={(e) => {

                    e.preventDefault();
                    axios.post('https://masai-api-mocker.herokuapp.com/auth/register', {
                        email: formdata.email,
                        password: formdata.password,
                        name: formdata.name,
                        username: formdata.username,
                        mobile: formdata.mobile,
                        description: formdata.description
                    })
                        .then(function (response) {
                            if (response.data.error == true) {
                                dispatch(registerfail(response.data.message))
                                alert("Registration failed, user already exists")
                                history.replace("/register")
                                setFormdata("")

                            } else {
                                dispatch(registersucces(response.data.message))
                                localStorage.setItem("Token", "vishal")
                                localStorage.setItem("isAuth", true)
                                alert("Registration Success")
                                history.replace("/")
                            }
                        })
                   


                }

                }>Submit</button>
            </form>
        </div>
    )
}

export default Register
