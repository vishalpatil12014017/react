import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
function Navbar() {
    const history =useHistory()
    const [Meal, setMeal] = useState("")
    var url = process.env.React_app_key
    const { Token, handleTokenchange, handleMealchange } = useContext(AuthContext)
    const handleSubmit =async (e) => {
        e.preventDefault()
        await axios.get(`https://www.themealdb.com/api/json/v1/${url}/search.php?s=${Meal.meal}`)
        .then(function (response) {
            handleMealchange(response.data.meals)
        })
       
    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setMeal({
            [name]: type === "checkbox" ? checked : value,
        })
    }

    return (
        <div className="fluid-container " style={{ "backgroundColor": "rgb(236, 235, 235)" }}>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid" >
                    <Link className="navbar-brand">Navbar</Link>

                    <div className="row">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="col-6 collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav px-5">
                                <Link to="/" className="nav-link px-3 active" aria-current="page">Home</Link>
                                <Link to="/about" className="nav-link px-3">About Us</Link>
                                <a className="nav-link px-3">Pricing</a>
                                <a className="nav-link px-3">Contact Us</a>
                                <Link to="/meal" className="nav-link px-1 mx-3 px-3
                                 btn btn-primary py-0 my-auto text-white" type="button" style={{ maxHeight: "40px" }}>Meal</Link>
                                {
                                    !Token ? <Link to="/login" className="nav-link px-3 btn btn-primary py-0 my-auto text-white" type="button" style={{ maxHeight: "40px" }} >Login</Link> : <Link to="/login" className="nav-link px-3 btn btn-primary py-0 my-auto text-white" type="button" style={{ maxHeight: "40px" }} onClick={() => {
                                        handleTokenchange("")
                                    }}>Logout</Link>
                                }
                            </div>
                            <form className="d-flex" onClick={handleSubmit}>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="meal" onChange={handleChange} />
                                <button className="btn btn-outline-success" type="submit" onClick={(e) => {
                                      history.push("/meal")
                                    handleSubmit(e)
                                }

                                }>Search</button>
                            </form>
                        </div>
                    </div>

                </div>
            </nav>

        </div>

    )
}

export default Navbar
