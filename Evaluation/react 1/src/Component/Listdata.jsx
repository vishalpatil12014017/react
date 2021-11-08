import React from 'react'

function Listdata({ List, handleToggle, statusdata,handleAdd,handledelete }) {
    return (
            statusdata?
                List.map((e) => (
                    <div key={e.id} className="form-check mt-2" style={e.stock ? { backgroundColor: "#88fa78", fontSize: "25px", padding: "5px", borderRadius: "10px" } : { backgroundColor: "#fac278", fontSize: "25px", padding: "5px", borderRadius: "10px" }}>
                        <label htmlFor="" className="form-check-lebel p-2 pl-5" style={!e.stock?{textDecoration:"line-through"}:{textDecoration:"none"}}>
                            {e.title}
                        </label>
                        <input type="text" className="form-check-input float-end" type="ckeckbox" id="flexCheckDefault" onClick={() => {
                            handleToggle(e.id)
                        }} style={e.status ? { backgroundColor: "#3f1dff" } : { backgroundColor: "#fd4039"}}/>
                         <button style={e.stock ? { borderRadius: "10px" } : {   borderRadius: "10px" ,border:"none"}} className="float-start" onClick={()=>{
                            handledelete(e.id)
                        }}>Delete</button>
                    </div>
                ))

           : 
                List.map((e) => (
                    <div key={e.id}  className="form-check mt-2" style={e.stock ? { backgroundColor: "#88fa78", fontSize: "25px", padding: "5px", borderRadius: "10px" } : { backgroundColor: "#fac278", fontSize: "25px", padding: "5px", borderRadius: "10px" }}>
                        <label htmlFor="" className="form-check-lebel p-2" >
                            {e.title}
                        </label>
                        <button style={e.stock ? { backgroundColor: "#88fa78", borderRadius: "10px" } : { backgroundColor: "#fac278",  borderRadius: "10px" ,border:"none"}} className="float-end" onClick={()=>{
                            handleAdd(e.id)
                        }}>+</button>
                        <button style={e.stock ? { borderRadius: "10px" } : {   borderRadius: "10px" ,border:"none"}} className="float-end" onClick={()=>{
                            handledelete(e.id)
                        }}>Delete</button>
                    </div>
                ))

           
   
    )
}

export default Listdata
