import React from 'react'
import './Login.css';
import { Card, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authentication } from '../store/features/auth/authSlice';
import { useAuth } from '../Auth';

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const authFunction =useAuth()

    const onFinish = (user) => {
        console.log(user);
        // dispatch(authentication(user))
        authFunction.login(user)
    }

    const onFinishFailed = (error) => {
        console.log(error);
    }

    useEffect(() => {
        if (auth.isSuccess) {
            navigate('/dashboard')
        }
    }, [auth.isSuccess])

    return (
        <div>
            <section className='login-card'>
                <Card type='inner' title="Login">
                    <Form
                        layout='vertical'
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="E-Mail"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                {
                                    type: 'email',
                                    message: 'Please input valid email!',
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                placeholder="Username"
                                prefix={<UserOutlined />}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    min: 4,
                                    message: 'Please input minimum 4 characters',
                                }
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                size='large'
                                placeholder="Password"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>
                        <Form.Item className='btn-login-item'>
                            <Button
                                className='btn-login'
                                size='large'
                                shape="round"
                                type='primary'
                                htmlType="submit"
                                loading={auth.loading}
                            >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </section>
        </div>
    );
}
