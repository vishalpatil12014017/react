import React from 'react'

function Formdata({ handleSubmit, handleChange }) {
    return (
        <>
            <form className="row g-3" onSubmit={handleSubmit} >
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  
                    <input type="email" placeholder="Enter Your Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <input type="password" placeholder="Enter Your Password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
                </div>
                <div className="col-12">
                    <button type="submit" value="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Formdata
