import React from 'react'
import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function NotFound404() {
    const navigate = useNavigate()
    const handlerHomeBtn = () => {
        navigate('/dashboard')
    }

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={handlerHomeBtn}>Back Home</Button>}
        />
    )
}
