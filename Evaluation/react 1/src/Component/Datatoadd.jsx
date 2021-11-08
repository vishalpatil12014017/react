import React, { useState } from 'react'
import Topsection from './Topsection'

function Datatoadd() {
    const [inventry, setInventry] = useState([]);
    const [Toorder, setToorder] = useState([]);
    const [ShowData, setShowData] = useState([...inventry])
    const handleAddCurrentInventry = (e) => {
        setInventry([...inventry, e])
    }
    const handleAddtoOrderInventry = (e) => {
        setToorder([...Toorder, e])
    }
    const ShowcurrentData = () => {
        setShowData(inventry)
    }
    const ShowOrderData = () => {
        setShowData(Toorder)
    }
    console.log(ShowData)
    return (
        <div>
            <Topsection handleAddCurrentInventry={handleAddCurrentInventry} handleAddtoOrderInventry={handleAddtoOrderInventry}></Topsection>
            <div className="row pt-4">
                <div className="col col-4"></div>
                <div className="col btn-group mt-1" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary bg-dark" onClick={ShowcurrentData}>Show Inventry</button>
                    <button type="button" className="btn btn-outline-primary bg-dark" onClick={ShowOrderData}>Show Orderlist</button>
                </div>
                <div className="col col-4"></div>
            </div>

        </div>

    )
}

export default Datatoadd
