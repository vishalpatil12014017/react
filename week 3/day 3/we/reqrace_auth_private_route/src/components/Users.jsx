import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Users() {
   
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("https://reqres.in/api/users")
            .then(({ data }) => {
                setUsers(data.data)
                return;
            })
    }, [])
    // console.log(users)
   
    return (
        <div className="p-4 text-center">
            <h1>All Users</h1>
            {
                users.map((e) => (
                    <div key={e.id}>
                        <Link style={{textDecoration:"none",color:'black'}} to={`/user/${e.id}`}><h4 >{e.first_name}</h4></Link>
                    </div>

                ))

            }

        </div>
    )
}

export default Users
