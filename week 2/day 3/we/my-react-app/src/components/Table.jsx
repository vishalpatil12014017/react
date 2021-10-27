import React from 'react'
function Table({ style, handledelete }) {

    return (
        <>
            <div className="card mb-3 mt-5" key={style.id} >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={style.file} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <button className="btn btn-danger float-end " style={{padding:"2px"}} onClick={() => {
                                handledelete(style.id)
                            }
                            }>delete</button>
                            <div>
                                <div><h5 className="card-title">{style.username}</h5></div>
                                <div className="float-end"><p className="card-text">Age : {style.age}</p></div>
                            </div>
                            <div>
                                <div> <p className="card-text">Address : {style.address}</p></div>
                                <div className="float-end"><p className="card-text">Salary : {style.salary}</p></div>
                            </div>
                            <div>
                                <div> <p className="card-text">Department : {style.department}</p></div>
                                <div className="float-start"><p className="card-text">marital state : { style.ismarried?"true":"false"}</p></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table
