const List = ({ data }) => {
    return (
        <div >
            <div className="fluid-container p-3">
                <div className="row">




                    {
                        data.map((e) => (
                            <div className="col col-12  g-2 col-lg-6 col-xl-4">
                                <div key={e.id} className="card mb-3 p-2" >
                                    <div className="row g-0 p-1">
                                        <div className="col-md-4">
                                            <img src={e.avatar_url} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{e.login}</h5>
                                                <p className="mt-0 mb-0"><a className="card-text" href={e.html_url} target="_blank" style={{ textDecoration: "none" }}>Github Profile</a></p>
                                                <p><a className="card-text" href={e.repos_url} target="_blank" style={{ textDecoration: "none" }}>View repos</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default List