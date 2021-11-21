import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
function Home() {
    const history =useHistory()
        const [data, setData] = useState([])
    const [prod, setProd] = useState(1)
    useEffect(() => {
        handleadd()
    }, [])
    const handleadd = async () => {
        await axios.get('http://localhost:3001/Product')
            .then(function (response) {
                setData(response.data)
            })
    }

    const handleincrement =  (e) => {
     axios.patch(`http://localhost:3001/Product/${e.id}`, {
            product: prod
        })
            .then(handleadd()) 
   setData(data)
    }
    const handlecart =  (e) => {
        axios.post(`http://localhost:3001/Cart`, {
                 e
           })
               .then(handleadd()) 
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
                                        <img src={e.image_url} className="img-fluid rounded-start " alt="..." />
                                    </div>

                                    <div className="col-md-8">
                                        <div className="btn-group float-end p-2 col-12" role="group" aria-label="Basic outlined example">
                                            <button type="button" className="btn btn-outline-primary" onClick={() => {
                                               setProd(e.product-1)
                                                handleincrement(e)
                                            }} >-</button>
                                            <button type="button" className="btn border-dark">{e.product}</button>
                                            <button type="button" className="btn btn-outline-primary" onClick={() => {
                                                setProd(e.product+1)
                                                handleincrement(e)
                                            }}>+</button>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{e.product_name}</h5>
                                            <p className="card-text">{e.description}</p>
                                            <p className="card-text"><small className="text-muted">Price - ${e.price}</small></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-2">
                                    <button className="btn btn-success float-end" onClick={() => {
                                               
                                                handlecart(e)
                                                history.push("/showcart")
                                            }}>Add To Cart</button>
                                </div>
                            </div>
                        </div>

                    ))

                }
            </div>
        </div>
    )
}

export default Home
