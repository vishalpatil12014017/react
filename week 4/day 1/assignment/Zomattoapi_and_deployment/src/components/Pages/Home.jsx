import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Home() {
  
    const [data, setData] = useState([])
    useEffect(() => {
        handleadd()
    }, [])
    const handleadd = async () => {
       
        await axios.get(`https://www.themealdb.com/api/json/v1/${process.env.React_app_key}/categories.php`)
            .then(function (response) {

                setData(response.data.categories)
            })
    }
    return (
        <div>{
            data.length==0?<h1>
                ...Loading
            </h1>:<div className="container p-4">
            <div className="row">
                {
                    data.map((e) => (

                        <div key={e.idCategory} className="col col-12  g-3 " >
                            <div className="card mb-3" >
                                <div className="row g-0">

                                    <div className="col-md-4 p-3">
                                        <img src={e.strCategoryThumb} className="img-fluid rounded-start " alt="..." />
                                    </div>

                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{e.strCategory}</h5>
                                            <p className="card-text">{e.strCategoryDescription}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-2">
                                    <button className="btn btn-success float-end" onClick={() => {
                                        alert("Make a Payment")
                                    }}>Buy Now</button>
                                </div>
                            </div>
                        </div>

                    ))

                }
            </div>
        </div>}</div>
    )
}

export default Home
