import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getmovies, getmovieserror, getmoviessuccess, getmoviesloading } from '../store/movies/actions'
import axios from 'axios'
import { Link, Redirect } from "react-router-dom"
function Dashboard() {

    const dispatch = useDispatch()
    const { loading, data, error } = useSelector(store => store.movies.movies)
    const { Token } = useSelector(store => store.Auth)
    const value=data.filter(e=>e.status==true)
    console.log('value:', value)
    useEffect(() => {
        getdata()
    }, [])
    const getdata = async () => {
        dispatch(getmovies())
    }
    if(!Token){
        return <Redirect to="/login"></Redirect>
    }
    return (
        <div>
            {
                loading ? <h1>...loading</h1> :
                    <div className="row p-4">
                       { value.length!=0? <h1 className="text-center text-white">Already Booked</h1>:<h1></h1>}
                       
                        {
                            value.map((e) => (
                                <div className="col col-12  g-2 col-lg-6 col-xl-4 p-4">
                                    <div className="card ">
                                        <img src={e.url} className="card-img-top" alt="..." style={{ maxHeight: "400px" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{e.name}</h5>
                                            <Link to={`/payment`} className="btn btn-primary float-end">Download Ticket</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                          <h1 className="text-center text-white">All Movies</h1>
                        {
                            data.map((e) => (
                                <div className="col col-12  g-2 col-lg-6 col-xl-4 p-4">
                                    <div className="card ">
                                        <img src={e.url} className="card-img-top" alt="..." style={{ maxHeight: "400px" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{e.name}</h5>
                                            <Link to={`/details/${e.id}`} className="btn btn-primary float-end">See Details</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    
            }
        </div>
    )
}

export default Dashboard
