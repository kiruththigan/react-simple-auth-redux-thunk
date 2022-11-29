import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth';
import { Col, Divider, Row } from 'antd';
import './Dashboard.css';

export default function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const authFunction = useAuth()

    const handlerLogout = () => {
        authFunction.logout()
        navigate('/')
    }
    useEffect(() => {
    }, [])
    return (
        <div>
            {/* {JSON.stringify(auth)} */}
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