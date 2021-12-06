import React from 'react'
function Table({ style }) {
    return (
        <>
            {
                style.map((e)=>(
                    <div className="card mb-3 mt-4 bg-white" key={e.id} >
                <div className="row g-0">
                    <div className="col">
                        <div className="card-body">
                            <div>
                                <div><h5 className="card-title">Name : {e.username}</h5>
                                <h5 className="card-text">Email : {e.email}</h5></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                ))
            }
        </>
    )
}

export default Table
