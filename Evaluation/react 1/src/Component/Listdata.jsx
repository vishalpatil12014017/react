import React from 'react'

function Listdata({ List, handleToggle, status,handleAdd }) {
    console.log(List)
    return (
     
            status?
          
                List.map((e) => (
                    <div key={e.id} className="form-check" style={!e.status ? { backgroundColor: "#88fa78", fontSize: "25px", padding: "5px", borderRadius: "10px" } : { backgroundColor: "#fac278", fontSize: "25px", padding: "5px", borderRadius: "10px" }}>
                        <label htmlFor="" className="form-check-lebel p-2" >
                            {e.title}
                        </label>
                        <input type="text" className="form-check-input float-end" type="ckeckbox" id="flexCheckDefault" onClick={() => {
                            handleToggle(e.id)
                        }} style={!e.status ? { backgroundColor: "#3f1dff" } : { backgroundColor: "#fd4039"}}/>
                    </div>
                ))

           : 
                List.map((e) => (
                    <div key={e.id}  className="form-check" style={e.stock ? { backgroundColor: "#88fa78", fontSize: "25px", padding: "5px", borderRadius: "10px" } : { backgroundColor: "#fac278", fontSize: "25px", padding: "5px", borderRadius: "10px" }}>
                        <label htmlFor="" className="form-check-lebel p-2" >
                            {e.title}
                        </label>
                        <button style={e.stock ? { backgroundColor: "#88fa78", borderRadius: "10px" } : { backgroundColor: "#fac278",  borderRadius: "10px" ,border:"none"}} className="float-end" onClick={()=>{
                            handleAdd(e.id)
                        }}>X</button>
                    </div>
                ))

           
   
    )
}

export default Listdata
