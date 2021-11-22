import React from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'
function Meal() {
    const { Meal } = useContext(AuthContext)
    console.log('e:', Meal)
    return (
        <div className="container p-4">
            <div className="row">
            {   Meal?
                    Meal.map((e) => (
                        <div key={e.idCategory} className="col col-12  g-3 " >
                            <div className="card mb-3" >
                                <div className="row g-0">

                                    <div className="col-md-4 p-3">
                                        <img src={e.strMealThumb} className="img-fluid rounded-start " alt="..." />
                                    </div>

                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h2 className="card-title">{e.strMeal}</h2>
                                            <p className="card-text">{e.strInstructions}</p>
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

                :<div><h1>Please Search Product</h1></div>
            }
            </div>
        </div>
    )

}

export default Meal
