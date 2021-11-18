import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className="fluid-container bg-dark">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid" >
                    <Link className="navbar-brand" style={{color:"white"}}>Navbar</Link>

                    <div className="row">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="col-6 collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav px-5">
                                <Link to="/" className="nav-link px-3 active" aria-current="page" style={{color:"white"}}>Home</Link>
                                <Link to="/about" className="nav-link px-3" style={{color:"white"}}>About Us</Link>
                                <Link className="nav-link px-3" style={{color:"white"}}>Pricing</Link>
                                <Link className="nav-link px-3" style={{color:"white"}}>Contact Us</Link>
                                <Link  className="nav-link px-1 mx-3 px-3
                                 btn btn-secondary py-0 my-auto text-white" type="button"  style={{ maxHeight: "40px" }}>Product Details</Link>
                                <Link to="/products" className="nav-link px-1 mx-3 px-3
                                 btn btn-secondary py-0 my-auto text-white" type="button"  style={{ maxHeight: "40px" }}>All Products</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
