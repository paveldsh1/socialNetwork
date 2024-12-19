import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './Login.module.scss'; 

const Login = () => {
  const [visible, setVisible] = useState(true);

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay}>
      <Form
        name="login"
        onFinish={onFinish}
        layout="vertical"
        className={styles.formContainer}
      >
        <div className={styles.closeButton} onClick={handleClose}>
          <CloseOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
        </div>
        <Form.Item
          label="Имя пользователя"
          name="username"
          rules={[{ required: true, message: 'Пожалуйста, введите ваше имя пользователя!' }]}
          className={styles.formItem}
        >
          <Input placeholder="Введите имя пользователя" />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}
          className={styles.formItem}
        >
          <Input.Password placeholder="Введите пароль" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.submitButton}>
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;