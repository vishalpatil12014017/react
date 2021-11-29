import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import { Link } from "react-router-dom"
function Details() {
    const { id } = useParams()
    const { loading, data, error } = useSelector(store => store.movies.movies)
    const value = data.filter(e => e.id == id)
    const history = useHistory()
    return (
        <div>
            {
                loading ? <h1>...loading</h1> :
                    <div className="row p-4">
                        <Link to="/"><button className="btn btn-primary">Privious Page</button></Link>
                        <div className="col m-auto" style={{ maxWidth: "600px" }}>
                            <div className="card ">
                                <img src={value[0].url} className="card-img-top" alt="..." style={{ maxHeight: "400px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{value[0].name}</h5>
                                    <p className="card-text">{value[0].decs}</p>
                                    <select class="form-select " aria-label="Default select example">
                                        <option selected>select Time</option>
                                        <option value="1">12-3</option>
                                        <option value="2">3-6</option>
                                        <option value="3">6-9</option>
                                        <option value="3">9-12</option>
                                    </select>
                                    <button className="btn btn-primary float-end mt-3"
                                        onClick={async () => {
                                            try {
                                                const { data } = await axios.patch(`http://localhost:3001/movies/${value[0].id}`,
                                                    { status: true }
                                                )
                                            } catch (err) {

                                            }
                                            history.push("/payment")
                                        }


                                        }>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Details
