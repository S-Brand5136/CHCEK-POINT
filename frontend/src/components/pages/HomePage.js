import { useState } from 'react';
import { Button } from 'antd';
import LoginForm from '../partials/LoginForm';

const HomePage = () => {
  const [isVisible, setisVisible] = useState(false);

  const showModal = () => {
    setisVisible(true);
  };

  return (
    <div>
      <Button type='primary' onClick={showModal}>
        Open Login Modal
      </Button>
      <LoginForm visible={isVisible} setVisible={() => setisVisible(false)} />
    </div>
  );
};

export default HomePage;
