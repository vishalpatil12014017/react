import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import db from '../db.json'
function Product() {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getdata(db)
    }, [])
    const getdata = (db) => {
        db.map((e) => {
            console.log("v")
            if (e.id == id) {
                setProduct(e)
            }
        })
    }
    console.log(id)
    console.log(product)
    return (
        <div className="p-4 m-4">
            {
                product.length!=0 ?
                    <div key={product.id} className="p-4 border m-4 border-dark m-auto" style={{maxWidth:"400px",borderRadius:"20px",backgroundColor:'white'}}>
                        <h1>Name : {product.name}</h1>
                        <h2>Price : $ {product.price}</h2>
                        <h3>Id : {product.id}</h3>
                    </div>
                    :
                    <div className="p-4 border m-4 border-dark m-auto" style={{maxWidth:"400px",borderRadius:"20px",backgroundColor:'white'}}>
                        <h1>Product not found</h1>
                    </div>
            }



        </div>
    )
}

export default Product
