import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
function Modal() {
    const [formdata, setFormdata] = useState({})
    const { handleTokenchange } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/register', {
            email: formdata.email,
            password: formdata.password
        })
            .then(function (response) {
                handleTokenchange(response.data.token)
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
        <div>
            <div className="modal fade p-4" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title mx-auto h2" id="staticBackdropLabel">Login</h5>
                            <div> <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>

                        </div>
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

                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                                alert("Login Successful")
                            }

                            }>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
