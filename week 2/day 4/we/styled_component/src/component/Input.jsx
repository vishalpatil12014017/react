import React from 'react'
import Form from './Form'

function Input() {
    return (
        <div>
            <Form onSubmit={(e)=>{
                e.preventDefault()
                console.log("Login")

            }}>
                <input type="text" placeholder="name" />
                <input type="password" placeholder="password" />
                <input type="submit" placeholder="submit" />
            </Form>
            <Form onSubmit={(e)=>{
                e.preventDefault()
                console.log("Sign up")

            }}>
                <input type="text" placeholder="name" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <input type="submit" placeholder="submit" />
            </Form>
        </div>
    )
}

export default Input
