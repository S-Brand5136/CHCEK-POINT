import { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';

const LoginForm = ({ visible, setVisible }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = () => {};

  return (
    <Modal centered footer={<Footer />} visible={visible} onCancel={setVisible}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <Form name='basic'>
        <Form.Item
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const Footer = () => {
  return [
    <footer key={1}>
      <h3 key={2} style={{ textAlign: 'center' }}>
        Not a member yet? <a href=''>Sign Up</a>.
      </h3>
    </footer>,
  ];
};

export default LoginForm;
