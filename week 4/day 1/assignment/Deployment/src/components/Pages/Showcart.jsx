import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
function Showcart() {
    const [data, setData] = useState([])
    useEffect(() => {
        handleadd()
    }, [])
    const handleadd = async () => {
        await axios.get('http://localhost:3001/Cart')
            .then(function (response) {
                setData(response.data)
            })
    }
    
    return (
        <div className="container p-4">
            <div className="row">
                {
                    data.map((e) => (

                        <div key={e.id} className="col col-12  g-3 col-lg-6 col-xl-4" >
                            <div className="card mb-3" >
                                <div className="row g-0">

                                    <div className="col-md-4 p-3">
                                        <img src={e.e.image_url} className="img-fluid rounded-start " alt="..." />
                                    </div>

                                    <div className="col-md-8">
                                        <div className="btn-group float-end p-2 col-12" role="group" aria-label="Basic outlined example">
                                          
                                            <button type="button" className="btn border-dark"> Total Items - {e.e.product}</button>
                                          
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{e.e.product_name}</h5>
                                            <p className="card-text">{e.e.description}</p>
                                            <p className="card-text"><small className="text-muted"> Total Price - ${e.e.price*e.e.product}</small></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-2">
                                    <button className="btn btn-success float-end" onClick={() => {
                                               
                                              
                                            }}>Buy Now</button>
                                </div>
                            </div>
                        </div>

                    ))

                }
            </div>
        </div>
    )
}

export default Showcart
