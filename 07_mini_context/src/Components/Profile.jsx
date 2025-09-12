import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

function Profile() {
    const { user ,logout } = useContext(UserContext)

    if (!user) {
        return (
            <h2 className="text-center text-lg font-semibold text-red-500 mt-6">
                Please Login
            </h2>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-2xl font-bold text-green-600">
                Welcome, {user.username} 👋
            </h1>
            <p className="mt-2 text-gray-600 text-sm">
                You are successfully logged in!
            </p>
             <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Profile
