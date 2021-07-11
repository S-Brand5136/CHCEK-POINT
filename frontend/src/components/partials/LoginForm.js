import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { authContext } from '../../providers/AuthProvider';
import { Button, Form, Input, Modal, Spin } from 'antd';
import Notification from './Notification';

const LoginForm = ({ visible, setVisible }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(authContext);

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (email && password) {
      setLoading(true);
      login(email, password)
        .then(() => {
          Notification({
            type: 'success',
            description: 'Succesfully logged in!',
            title: 'Success',
          });
          setTimeout(() => {
            setLoading(false);
            setVisible();
            history.push('/');
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          Notification({
            type: 'error',
            description: 'Incorrect email or password, try again!',
            title: 'Error',
          });
          setLoading(false);
        });
    } else {
      Notification({
        type: 'error',
        description: 'Email or password is needed!',
        title: 'Error',
      });
    }
  };

  return (
    <Modal centered footer={<Footer />} visible={visible} onCancel={setVisible}>
      <h2 style={{ textAlign: 'center' }}>Welcome Back to CHECK-POINT!</h2>
      <h3 style={{ textAlign: 'center' }}>Login</h3>
      <Form name='login' layout='vertical'>
        <Form.Item
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item style={{ textAlign: 'center' }}>
          {!loading ? (
            <Button
              type='primary'
              onClick={(e) => submitHandler(e)}
              shape='round'
              block
            >
              Login
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
        Not a member yet? <a href='/'>Sign Up</a>
      </h3>
    </footer>,
  ];
};

export default LoginForm;
