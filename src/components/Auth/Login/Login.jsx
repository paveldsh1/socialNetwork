import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './Login.module.scss';
import { connect } from 'react-redux';
import { sendAuthData } from '../../../redux/auth-reducer';

const Login = (props) => {
    const { handleSubmit } = props
    const [visible, setVisible] = useState(true);

    const onFinish = async (values) => {
        const rememberMe = false;
        const captcha = false;
        debugger
        props.sendAuthData(values.username, values.password, rememberMe, captcha)
        console.log('Received values:', values);
    };

    const handleClose = () => {
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className={styles['login__overlay']}>
            <Form
                onSubmit={handleSubmit}
                name="login"
                onFinish={onFinish}
                layout="vertical"
                className={styles['login__form-container']}
            >
                <div className={styles['login__close-button']} onClick={handleClose}>
                    <CloseOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
                </div>
                <Form.Item
                    label="Email адрес"
                    name="username"
                    rules={[{ required: true, message: 'Пожалуйста, введите ваш Email адрес!' }]}
                    className={styles['login__form-item']}
                >
                    <Field name="email" component="input" type="email" />
                    {/* <Input placeholder="Введите ваш Email адрес" /> */}
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}
                    className={styles['login__form-item']}
                >
                    <Field name="password" component="input" type="password" />
                    {/* <Input.Password placeholder="Введите пароль" /> */}
                </Form.Item>

                <Form.Item>
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        className={styles['login__submit-button']}>
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default connect(null, {sendAuthData})(reduxForm({ form: 'login' })(Login));