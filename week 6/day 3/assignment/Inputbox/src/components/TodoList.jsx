
const Todolist = ({ list, handleChangeStatus }) => {
    return (
        <div className="p-2">
            {
                list.map((e) => (
                    <div className="m-auto mb-0 row my-2" key={e.id} style={e.status ? { backgroundColor: "green", maxWidth: "300px", borderRadius: "10px" ,fontSize:"30px"} : { backgroundColor: "red", maxWidth: "300px", borderRadius: "10px",fontSize:"30px" }}>
                        <div className="text-white col-6">
                            {e.title}
                        </div>
                        <div className="col-6">
                        <input className="form-check-input p-2 m-2 float-end" type="checkbox" value="" id="flexCheckDefault" style={{height:"30px",width:"30px"}}  onClick={() => {
                                handleChangeStatus(e.id, e.title)
                            }}/>
                        </div>
                    </div>
                ))

            }
        </div>
    )
}

export default Todolist