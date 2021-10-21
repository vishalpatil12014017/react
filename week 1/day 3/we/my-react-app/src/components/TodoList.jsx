
function Todolist({ List, handleToggle }) {
    return (
        <>
            {
                List.map((e) => (
                    <div className="form-check">
                        <label className="form-check-label" for="flexCheckDefault">
                            {e.title}
                        </label>
                        <input className="form-check-input float-end" type="checkbox" value="" id="flexCheckDefault"
                            onClick={() => {
                                handleToggle(e.id);     
                            }} />
                    </div>
                ))
            }
        </>
    )
}
export default Todolist