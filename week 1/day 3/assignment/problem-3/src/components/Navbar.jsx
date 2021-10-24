import React from 'react';
import '../components/Card.css'
function Navbar({ handleRating, setIsClicked, handleSort ,handlePayment}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light p-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">Restuarant</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mt-2 mx-2" onClick={() => {
                                setIsClicked(false);
                            }}>
                                Home
                            </li>
                            <li className="nav-item dropdown mx-3 ">
                                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ratings
                                </a>
                                <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                                    <li value={1} onClick={
                                        handleRating
                                    }>Above 1</li>
                                    <li value={2} onClick={
                                        handleRating
                                    }>Above 2</li>
                                    <li value={3} onClick={
                                        handleRating
                                    }>Above 3</li>
                                    <li value={4} onClick={
                                        handleRating
                                    }>Above 4</li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-3">
                                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort
                                </a>
                                <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                                    <li value={1} onClick={
                                        handleSort
                                    }>Low To High</li>
                                    <li value={-1} onClick={
                                        handleSort
                                    }>High To Low</li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-3 ">
                                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Payment
                                </a>
                                <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                                    <li value={1} onClick={
                                        handlePayment
                                    }>Cash</li>
                                    <li value={2} onClick={
                                        handlePayment
                                    }>Card</li>
                                    <li value={3} onClick={
                                        handlePayment
                                    }>UPI</li>
                                    <li value={4} onClick={
                                        handlePayment
                                    }>All Apply</li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;
