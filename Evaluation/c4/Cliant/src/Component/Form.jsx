import React from 'react'
import axios from 'axios';
import useFetch from './UseFetch';
import { useState, useEffect } from 'react';
function useNotification() {
    const successNotification = (data, delay) => {

    }
    const failureNotification = (data, delay) => {

    }
    return {
        successNotification,
        failureNotification,
    }
}
function Form() {
    const { loading, error, data } = useFetch("http://localhost:3001/User")
    console.log('data:', data)
    const [formdata, setFormdata] = useState({})
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormdata({
            ...formdata,
            [name]: type === "checkbox" ? checked : value,
        })
    };
    const { successNotification, failureNotification, } = useNotification();
    const [suc, setsuc] = useState(false)
    const [err, seterr] = useState(false)
    useEffect(() => {
        var timer = setTimeout(() => {
             setsuc(false)
        }, 2000);
        clearTimeout(timer)
      
        if (suc == true) {
            return <div class="alert alert-primary" role="alert">
                A simple primary alert—check it out!
            </div>
        }
    }, [])

    return (
       loading?<h1 className='text-center text-white'>loading</h1>: <div className="p-5 border border-dark m-5 mx-auto bg-white" style={{ maxWidth: "500px", margin: "auto", borderRadius: "15px" }}>
       <h1 className="text-center">Register Here</h1>
       <form >
           <div class="input-group mb-3">
               <input type="text" class="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1" name="First_Name" onChange={handleChange} />
           </div>
           <div class="input-group mb-3">
               <input type="text" class="form-control" placeholder="Last_Name" aria-label="Username" aria-describedby="basic-addon1" name="Last_Name" onChange={handleChange} />
           </div>
           <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Email address</label>
               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} />
               <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
           </div>
           <div className="mb-3">
               <label for="exampleInputPassword1" className="form-label">Date Of Birth</label>
               <input type="date" className="form-control" name="date" onChange={handleChange} />
           </div>
           <div className="mb-3">
               <label className="form-label">Mobile</label>
               <input type="number" className="form-control" name="mobile" onChange={handleChange} />
           </div>
           <button type="submit" className="btn btn-primary mt-2" onClick={(e) => {
               e.preventDefault();

               data.filter((x) => {
                   if (x.email == formdata.email) {
                       failureNotification("unsuccessful", 2)
                       alert("Already Added")
                   } else {
                       axios.post('http://localhost:3001/User', {
                           email: formdata.email,
                           password: formdata.password,
                           First_Name: formdata.First_Name,
                           Last_Name: formdata.Last_Name,
                           mobile: formdata.mobile,
                           DOB: formdata.date
                       })
                       successNotification("ABC", 2)
                       alert("User Successfully Added")
                   }
               })
               if (data.length === 0) {
                   axios.post('http://localhost:3001/User', {
                       email: formdata.email,
                       password: formdata.password,
                       First_Name: formdata.First_Name,
                       Last_Name: formdata.Last_Name,
                       mobile: formdata.mobile,
                       DOB: formdata.date
                   })
                   successNotification("QQQQ", 2000)
                   alert("User Successfully Added")
               }



           }

           }>Submit</button>
       </form>
   </div>
    )
}

export default Form
