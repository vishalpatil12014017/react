import React from 'react'
import { Link } from 'react-router-dom'
function Payment() {
    return (
        <div>
            <Link to="/"><button className="btn btn-primary text-center m-auto">Privious Page</button></Link>
            <div className="text-center bg-white p-4 m-auto" style={{ maxWidth: "200px", maxHeight: "200px" }}>

                <br />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="" style={{ maxWidth: "100px", maxHeight: "100px" }} />
            </div>
        </div>

    )
}

export default Payment
