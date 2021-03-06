import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loginfail } from '../../store/Auth/actions'
function Navbar() {
    const { Token } = useSelector(store => store.Auth)
    const dispatch = useDispatch()

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
                                <Link to="/todos" className="nav-link px-1 mx-3 px-3
                                 btn btn-primary py-0 my-auto text-white" type="button" style={{ maxHeight: "40px" }}>Todos</Link>
                                {
                                    !Token ? <Link to="/todos" className="nav-link px-3 btn btn-primary py-0 my-auto text-white" type="button" style={{ maxHeight: "40px" }} >Login</Link> : <Link to="/login" className="nav-link px-3 btn btn-primary py-0 my-auto text-white" type="button" style={{ maxHeight: "40px" }} onClick={() => {
                                        dispatch(loginfail())
                                        localStorage.setItem("Token", "")
                                        localStorage.setItem("isAuth", false)
                                    }}>Logout</Link>
                                }
                            </div>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="meal" />
                                <button className="btn btn-outline-success" type="submit" >Search</button>
                            </form>
                        </div>
                    </div>

                </div>
            </nav>

        </div>

    )
}

export default Navbar
