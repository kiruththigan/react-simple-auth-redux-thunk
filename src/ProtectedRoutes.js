import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useAuth } from './Auth'

export const ProtectedRoutes = ({ children }) => {
    const authFunction = useAuth()
    const auth = useSelector(state => state.auth)

    if (!auth.isSuccess) {
        return <Navigate to='/' />
    }

    return children
}
