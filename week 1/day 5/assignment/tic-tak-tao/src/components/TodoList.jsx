
function Todolist({ List, handleToggle ,handleRemove}) {
    return (
        <>
            {
                List.map((e) => (
                    <div className="form-check" style={e.status?{backgroundColor:"#88fa78",textDecoration:"underline"}:{backgroundColor:"#fac278"}}>
                        <label className="form-check-label" for="flexCheckDefault" style={e.status?{textDecoration:"line-through"}:{textDecoration:"none"}}>
                            {e.title}
                        </label>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                            onClick={() => {
                                handleToggle(e.id,e.title);
                            }} />
                        <button style={e.status?{backgroundColor:"#88fa78"}:{backgroundColor:"#fac278"}} className="float-end" onClick={() => {
                            handleRemove(e.id);
                        }}>X</button>
                    </div>
                ))
            }
        </>
    )
}
export default Todolist