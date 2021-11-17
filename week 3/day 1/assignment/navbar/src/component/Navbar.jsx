import React from 'react'
import Modal from './Modal'
import Modal1 from './Modal1'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
function Navbar() {
    const {Token,handleTokenchange}= useContext(AuthContext)
    return (
        <div className="fluid-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>

                    <div className="row">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="col-6 collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav px-5">
                                <a className="nav-link px-3 active" aria-current="page">Home</a>
                                <a className="nav-link px-3">Features</a>
                                <a className="nav-link px-3">Pricing</a>
                                <a className="nav-link px-3">Contact Us</a>
                                <a className="nav-link px-1 mx-3 px-3
                                 btn btn-primary py-0 my-auto text-white" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" style={{maxHeight:"40px"}}>User Details</a>
                             {
                                   !Token? <a className="nav-link px-3 btn btn-primary py-0 my-auto text-white" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{maxHeight:"40px"}} >Login</a>:<a className="nav-link px-3 btn btn-primary py-0 my-auto text-white" type="button" style={{maxHeight:"40px"}} onClick={()=>{
                                       handleTokenchange("")
                                   }}>Logout</a>
                             }
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
            <Modal></Modal>
            <Modal1></Modal1>
        </div>
    )
}

export default Navbar
