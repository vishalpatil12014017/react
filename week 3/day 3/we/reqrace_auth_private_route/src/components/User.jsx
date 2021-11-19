import React,{useContext} from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams,Redirect } from 'react-router-dom'
import { AuthContext } from './AuthContext'
function User() {
    const {Token}=useContext(AuthContext)
    const [users, setUsers] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
            .then(({ data }) => {
                setUsers(data.data)
                return;
            })
    }, [id])
    console.log("users",users)
    if(!Token){
       return <Redirect to="/login"></Redirect>
    }
    return (
        <div className="text-center">

            <div key={users.id} className="p-4">
                <img src={users.avatar} alt="" />
                <h1 >Name : {users.first_name}</h1>
                <h1 >SurName : {users.last_name}</h1>
            </div>
        </div>
    )
}

export default User
