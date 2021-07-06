import { useState, useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';
import { Button, Form, Input, Modal, Spin } from 'antd';
import Notification from './Notification';

const LoginForm = ({ visible, setVisible }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Modal centered footer={<Footer />} visible={visible} onCancel={setVisible}>
      <h2 style={{ textAlign: 'center' }}>Welcome to CHECK-POINT!</h2>
      <h3 style={{ textAlign: 'center' }}>Register</h3>
      <Form name='login' layout='vertical'>
        <Form.Item
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label='Username'
          name='Username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input onChange={(e) => setUsername(e.target.value)} />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item
          label='Confirm Password'
          name='confirm_password'
          rules={[{ required: true, message: 'Please confirm your password!' }]}
        >
          <Input.Password
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          {!loading ? (
            <Button
              type='primary'
              onClick={(e) => submitHandler(e)}
              shape='round'
              block
            >
              Register
            </Button>
          ) : (
            <Spin />
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
};

const Footer = () => {
  return [
    <footer key={1}>
      <h3 key={2} style={{ textAlign: 'center' }}>
        Already a member? <a>Login</a>
      </h3>
    </footer>,
  ];
};

export default LoginForm;
