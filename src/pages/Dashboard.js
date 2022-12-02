import { Button, notification, Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth';
import './Dashboard.css';

export default function Dashboard() {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth)
    const authFunction = useAuth()

    const [api, contextHolder] = notification.useNotification();
    const loginSuccessAlert = () => {
        api['success']({
            message: 'Successfull Login',
            description:
                'Welcome to onboard.',
        });
    };

    const handlerLogout = () => {
        authFunction.logout()
        navigate('/')
    }

    useEffect(() => {
        if (auth.isSuccess) {
            loginSuccessAlert()
        }

        
    })

    return (
        <div>
            {contextHolder}

            <Row gutter={16}>
                <Col span={24}>
                    <h1>Dashboard</h1>
                    <h3>Welcome</h3>
                    <div className='box'>
                        <p>Message : {auth.message}</p>
                        <p>Token : {auth.payload}</p>
                    </div>
                </Col>
            </Row>


            <Button type='primary' onClick={handlerLogout}>LogOut</Button>

        </div>
    )
}