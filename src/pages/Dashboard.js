import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth';
import { logout } from '../store/features/auth/authSlice';

export default function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const authFunction =useAuth()

    const handlerLogout = () => {
        authFunction.logout()
        navigate('/')
    }
    useEffect(() => {
    }, [])
    return (
        <div>
            <h1>Dashboard</h1>
            <h6>Welcome {JSON.stringify(auth)}</h6>
            <Button onClick={handlerLogout}>LogOut</Button>
        </div>
    )
}