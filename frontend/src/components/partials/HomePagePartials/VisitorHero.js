import { useState } from 'react';
import { Row, Button, Col, Typography, Image } from 'antd';
import mascot from '../../../img/mascot1.png';

// Components
import FeatureCardList from './FeatureCardList';
import LoginForm from '../LoginForm';
import RegisterForm from '..//RegisterForm';

const VisitorHero = () => {
  const [isLoginVisible, setisLoginVisible] = useState(false);
  const [isRegisterVisible, setisRegisterVisible] = useState(false);

  const showLoginModal = () => {
    setisLoginVisible(true);
  };

  const showRegisterModal = () => {
    setisRegisterVisible(true);
  };

  return (
    <>
      <Row justify='center'>
        <Col lg={12} sm={24}>
          <Typography.Title className='hero-text-large main-font'>
            Tired of forgetting your progress?
          </Typography.Title>
          <Typography.Title level={3} className='hero-text-medium main-font'>
            Don't worry, we can track that for you.
          </Typography.Title>
          <Typography.Text className='hero-text-small main-font'>
            Discover new games, keep track of your current playthroughs,
            completed games, and even games you kicked to the curb.
          </Typography.Text>
          <div style={{ marginTop: '1rem' }}>
            <Button
              className='visitor-btn'
              style={{ marginRight: '1rem' }}
              size='large'
              shape='round'
              onClick={showLoginModal}
            >
              <span>Login</span>
            </Button>
            <Button
              className='visitor-btn'
              shape='round'
              size='large'
              onClick={showRegisterModal}
            >
              <span>Register</span>
            </Button>
            <LoginForm
              visible={isLoginVisible}
              setVisible={() => setisLoginVisible(!isLoginVisible)}
            />
            <RegisterForm
              visible={isRegisterVisible}
              setVisible={() => {
                setisRegisterVisible(false);
              }}
            />
          </div>
        </Col>
        <Col lg={7} sm={24}>
          <Row justify='center'>
            <Image height={400} preview={false} src={mascot} />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg={24}>
          <FeatureCardList />
        </Col>
      </Row>
    </>
  );
};

export default VisitorHero;
