import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getmovies, getmovieserror, getmoviessuccess, getmoviesloading } from '../store/movies/actions'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link, Redirect } from "react-router-dom"
function Details() {
    const dispatch = useDispatch()
    const {id}=useParams()
    console.log('id:', id)
    const [state, setstate] = useState()
    
    const { loading, data, error } = useSelector(store => store.movies.movies)
    const value=data.filter(e=>e.id==id)
    console.log('value:', value)
    return (
        <div>
            {
                loading ? <h1>...loading</h1> :
                    <div className="row p-4">
                         <Link to="/"><button className="btn btn-primary">Privious Page</button></Link>
                              <div className="col m-auto" style={{maxWidth:"600px"}}>
                                    <div className="card ">
                                        <img src={value[0].url} className="card-img-top" alt="..." style={{ maxHeight: "400px" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{value[0].name}</h5>
                                            <p className="card-text">{value[0].decs}</p>
                                            <Link to={`/details/:${value[0].id}`} className="btn btn-primary float-end">See Details</Link>
                                        </div>
                                    </div>
                                </div>
                    </div>
            }
        </div>
    )
}

export default Details
