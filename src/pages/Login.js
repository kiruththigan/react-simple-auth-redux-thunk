import './Login.css';
import React from 'react'
import { useEffect } from 'react';
import { Card, Form, Input, Button, notification, Col, Row, Spin } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useAuth } from '../Auth';

export default function Login() {
    const navigate = useNavigate()
    const auth = useSelector(state => state.auth)
    const authFunction = useAuth()
    const [api, contextHolder] = notification.useNotification();
    const loginFailureAlert = () => {
        api['error']({
            message: 'Login Failed',
            description:
                'Username or password wrong.',
        });
    };

    const onFinish = (user) => {
        authFunction.login(user)
    }

    const onFinishFailed = (error) => {
        console.log(error);
    }

    useEffect(() => {
        if (auth.isSuccess) {
            navigate('/dashboard')
        }
        if (auth.isFailed) {
            loginFailureAlert()
        }
    }, [auth.isSuccess, auth.isFailed])


    return (
        <div>
            {contextHolder}
            <section className='login-card'>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                        <Spin spinning={auth.loading}>
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
                        </Spin>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </section>
        </div>
    );
}
