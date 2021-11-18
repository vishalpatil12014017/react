import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className="fluid-container bg-dark" >
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
                                <Link className="nav-link px-3">Pricing</Link>
                                <Link className="nav-link px-3">Contact Us</Link>
                                <Link className="nav-link px-1 mx-3 px-3
                                 btn btn-primary py-0 my-auto text-white" type="button"  style={{ maxHeight: "40px" }}>User Details</Link>
                                <Link to="/users" className="nav-link px-1 mx-3 px-3
                                 btn btn-primary py-0 my-auto text-white" type="button"  style={{ maxHeight: "40px" }}>All Users</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
