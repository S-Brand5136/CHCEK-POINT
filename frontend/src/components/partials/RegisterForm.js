import { Button, Form, Input, Modal, Spin } from 'antd';

const LoginForm = ({ visible, setVisible }) => {
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
          <Input />
        </Form.Item>

        <Form.Item
          label='Username'
          name='Username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label='Confirm Password'
          name='confirm_password'
          rules={[{ required: true, message: 'Please confirm your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            onClick={(e) => submitHandler(e)}
            shape='round'
            block
          >
            Register
          </Button>
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
