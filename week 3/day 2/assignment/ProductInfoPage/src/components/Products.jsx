import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import db from '../db.json'
function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(db)
    }, [])
    return (
        <div className="p-4">
            <h1>All Products</h1>
            {
                products.map((e) => (
                    <div key={e.id}>
                        <Link style={{ textDecoration: "none", color: 'black' }} to={`/product/${e.id}`}><h4 >{e.name}</h4></Link>
                    </div>

                ))

            }

        </div>
    )
}

export default Products
