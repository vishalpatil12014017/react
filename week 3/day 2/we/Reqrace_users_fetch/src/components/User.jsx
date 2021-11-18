import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
function User() {
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
    return (
        <div>

            <div key={users.id} className="p-4">
                <img src={users.avatar} alt="" />
                <h1 >Name : {users.first_name}</h1>
                <h1 >SurName : {users.last_name}</h1>
            </div>



        </div>
    )
}

export default User
