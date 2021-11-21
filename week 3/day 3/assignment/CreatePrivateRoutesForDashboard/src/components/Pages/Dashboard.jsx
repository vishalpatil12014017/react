import React from 'react'
import { Link } from 'react-router-dom'
function Dashboard() {
    return (
        <div className="text-center p-4">
            <h1>Welcome to Dashboard</h1>
            <div>
                <Link to="/setting">
                <button className="btn btn-primary">Go to Settings</button>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard
