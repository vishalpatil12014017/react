import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
function Navbar() {
    const { Token, handleTokenchange } = useContext(AuthContext)
    return (
        <div className="fluid-container " style={{  "backgroundColor": "rgb(236, 235, 235)"}}>
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
                                <Link to="/showcart" className="nav-link px-1 mx-3 px-3
                                 btn btn-primary py-0 my-auto text-white" type="button" style={{ maxHeight: "40px" }}>Cart</Link>
                                {
                                    !Token ? <Link to="/login" className="nav-link px-3 btn btn-primary py-0 my-auto text-white" type="button" style={{ maxHeight: "40px" }} >Login</Link> : <Link to="/login" className="nav-link px-3 btn btn-primary py-0 my-auto text-white" type="button" style={{ maxHeight: "40px" }} onClick={() => {
                                        handleTokenchange("")
                                    }}>Logout</Link>
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
           
        </div>

    )
}

export default Navbar
