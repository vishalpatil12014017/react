import React from 'react'

function Formdata({handleSubmit,handleChange,inputRef}) {
    return (
        <>
             <form className="row g-3"  onSubmit={handleSubmit} >
                <div className="col-md-12">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputEmail4" onChange={handleChange} name="username" required/>
                </div>
                <div className="col-md-12">
                    <label className="form-label">Age</label>
                    <input type="number" className="form-control" id="inputEmail4" onChange={handleChange} name="age" required/>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Enter Your Address" onChange={handleChange} required name="address" />
                </div>
                <div className="col-md-6">
                    <label for="inputState" className="form-label">Department</label>
                    <select id="inputState" className="form-select" onChange={handleChange} required name="department">
                        <option selected>....</option>
                        <option>Mechnical</option>
                        <option>Electrical</option>
                        <option>Electronics</option>
                        <option>Civil</option>
                        <option>Computer Science</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label for="inputCity" className="form-label">Salary</label>
                    <input type="text" className="form-control" id="inputCity" onChange={handleChange} required name="salary" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" onChange={handleChange} name="ismarried" />
                        <label className="form-check-label" for="gridCheck">
                            Marital Status
                        </label>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input type="file" ref={inputRef} className="form-control" id="inputGroupFile01" onChange={handleChange} required name="file" />
                </div>
                <div className="col-12">
                    <button type="submit" value="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Formdata
