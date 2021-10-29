import React from 'react'
function Table(props) {

    return (
        <>
            <div className="card mb-3 mt-5" key={props.style.id} >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.style.file} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div>
                                <div><h5 className="card-title">{props.style.username}</h5></div>
                                <div className="float-end"><p className="card-text">Age : {props.style.age}</p></div>
                            </div>
                            <div>
                                <div> <p className="card-text">Address : {props.style.address}</p></div>
                                <div className="float-end"><p className="card-text">Salary : {props.style.salary}</p></div>
                            </div>
                            <div>
                                <div> <p className="card-text">Department : {props.style.department}</p></div>
                                <div className="float-start"><p className="card-text">marital state : {props.style.ismarried ? "true" : "false"}</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table
