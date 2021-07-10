import { useState } from 'react';

import Notification from '../Notification';

import { Row, Col, Typography, Button, Spin, Divider } from 'antd';

const UserAbout = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [editable, setEditable] = useState(false);

  const clickHandler = () => {
    setEditable((state) => !state);
    if (editable) {
      setLoading((state) => !state);
      setTimeout(() => {
        setLoading((state) => !state);
        Notification({
          type: 'success',
          description: 'Your info has been updated!',
          title: 'Success',
        });
      }, 1500);
    }
  };

  return (
    <section className='user-about'>
      <Row justify='center' align='middle' style={{ marginBottom: '3rem' }}>
        <Col span={24}>
          <Typography.Title className='title-font' level={2}>
            More about {user && user.username}
            <span className='divider-highlight'> | </span>
          </Typography.Title>
          <Typography.Text editable={editable}>
            {user && user.bio}
          </Typography.Text>
          <Divider style={{ margin: '1rem 0 0rem 0' }}></Divider>
        </Col>
      </Row>
      <Row justify='center' gutter={12} align='middle'>
        <Col span={12}>
          <Typography.Title className='title-font' level={2}>
            Find this user under these names
            <span className='divider-highlight'> | </span>
          </Typography.Title>
          <div className='about-section'>
            <Typography.Text editable={editable}>
              {user && user.in_game_usernames}
            </Typography.Text>
          </div>
        </Col>

        <Col span={12}>
          <Typography.Title className='title-font' level={2}>
            {user && user.username}'s platforms
            <span className='divider-highlight'> | </span>
          </Typography.Title>
          <div className='about-section'>
            <Typography.Text editable={editable}>
              {user && user.platforms}
            </Typography.Text>
          </div>
        </Col>
      </Row>
      <Row justify='end' align='bottom' style={{ height: '100px' }}>
        <Col span={4}>
          {loading ? (
            <Row justify='center'>
              <Spin />
            </Row>
          ) : (
            <Button
              onClick={() => clickHandler()}
              type='primary'
              block
              shape='round'
            >
              {editable ? 'Submit' : 'Edit'}
            </Button>
          )}
        </Col>
      </Row>
    </section>
  );
};

export default UserAbout;
