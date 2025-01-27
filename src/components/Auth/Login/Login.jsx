import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './Login.module.scss';
import { connect } from 'react-redux';
import { login } from '../../../redux/auth-reducer';
import { required, maxLengthCreator } from '../../../utils/validators';
import { Input } from '../../common/FormsControls/FormsControls';
import { Navigate } from 'react-router-dom';

const maxLengthCreator50 = maxLengthCreator(50);

const Login = (props) => {
    const { onClose } = props;
    const [visible, setVisible] = useState(true);

    const onFinish = async (values) => {
        const rememberMe = true;
        props.login(values.username, values.password, rememberMe)
    };

    if(props.isAuth) {
        return <Navigate to="/profile"></Navigate>
    }

    const handleClose = () => {
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className={styles['login__overlay']}>
            <Form
                name="login"
                onFinish={onFinish}
                layout="vertical"
                className={styles['login__form-container']}
            >
                <div className={styles['login__close-button']} onClick={() => {
                    handleClose()
                    if(onClose) onClose();
                }}>
                    <CloseOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
                </div>
                <Form.Item
                    label="Email адрес"
                    name="username"
                    rules={[{ required: true, message: 'Пожалуйста, введите ваш Email адрес!' }]}
                    className={styles['login__form-item']}
                >
                    <Field 
                        component={Input}
                        name="email" 
                        validate={[required, maxLengthCreator50]}
                        type="email" />
                    {/* <Input placeholder="Введите ваш Email адрес" /> */}
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}
                    className={styles['login__form-item']}
                >
                    <Field 
                        component={Input}
                        name="password" 
                        validate={[required, maxLengthCreator50]}
                        type="password" />
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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(reduxForm({ form: 'login' })(Login));