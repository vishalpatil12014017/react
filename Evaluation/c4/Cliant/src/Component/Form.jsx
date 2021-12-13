import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
function Register() {
    const [formdata, setFormdata] = useState({})
    const history = useHistory()
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormdata({
            ...formdata,
            [name]: type === "checkbox" ? checked : value,
        })
    };
    return (
        <div className="p-5 border border-dark m-5 mx-auto bg-white" style={{ maxWidth: "500px", margin: "auto", borderRadius: "15px" }}>
            <h1 className="text-center">Register Here</h1>
            <form >
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1" name="First_Name" onChange={handleChange} />
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Last_Name" aria-label="Username" aria-describedby="basic-addon1" name="Last_Name" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Date Of Birth</label>
                    <input type="date" className="form-control" name="date" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mobile</label>
                    <input type="number" className="form-control" name="mobile" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary mt-2" onClick={(e) => {

                    e.preventDefault();
                    axios.post('https://masai-api-mocker.herokuapp.com/auth/register', {
                        email: formdata.email,
                        password: formdata.password,
                        First_Name: formdata.First_Name,
                        Last_Name: formdata.Last_Name,
                        mobile: formdata.mobile,
                        DOB: formdata.date
                    })
                        .then(function (response) {
                            if (response.data.error == true) {
                                alert("Registration failed, user already exists")
                                history.replace("/register")
                                setFormdata("")

                            } else {
                                
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
