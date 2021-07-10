import { useState } from 'react';

import { Row, Col, Typography, Divider, Button, Spin } from 'antd';
import Notification from '../Notification';

// Hook up fake way of udpating info

const UserInfo = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [editInfo, setEditInfo] = useState(false);

  const clickHandler = () => {
    setEditInfo((state) => !state);
    if (editInfo) {
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
    <section className='user-info'>
      <Row justify='center' align='middle'>
        <Col span={24}>
          <Typography.Title underline level={5}>
            User Info:{' '}
          </Typography.Title>
        </Col>
      </Row>

      {/* user name */}
      <Row justify='space-between' align='middle'>
        <Col>
          <Typography.Text strong level={4} style={{ margin: '0' }}>
            Username:
          </Typography.Text>
        </Col>
        <Col>
          <Typography.Text
            editable={editInfo}
            level={4}
            style={{ margin: '0' }}
          >
            {user && `${user.username}`}
          </Typography.Text>
        </Col>
        <Divider style={{ borderColor: 'light-gray', margin: '.4rem' }} />
      </Row>

      {/* email */}
      <Row justify='space-between' align='middle'>
        <Col>
          <Typography.Text strong level={4} style={{ margin: '0' }}>
            email:
          </Typography.Text>
        </Col>
        <Col>
          <Typography.Text
            editable={editInfo}
            level={4}
            style={{ margin: '0', textAlign: 'center' }}
          >
            {user && `${user.email}`}
          </Typography.Text>
        </Col>
        <Divider style={{ borderColor: 'light-gray', margin: '.4rem' }} />
      </Row>

      {/* discord_name */}
      <Row justify='space-between' align='middle'>
        <Col>
          <Typography.Text strong level={4} style={{ margin: '0' }}>
            Discord Userame:
          </Typography.Text>
        </Col>
        <Col>
          <Typography.Text
            editable={editInfo}
            level={4}
            style={{ margin: '0', textAlign: 'center' }}
          >
            {user && `${user.discord_username}`}
          </Typography.Text>
        </Col>
        <Divider style={{ borderColor: 'light-gray', margin: '.4rem' }} />
      </Row>

      {/* timezone */}
      <Row justify='space-between' align='middle'>
        <Col>
          <Typography.Text strong level={4} style={{ margin: '0' }}>
            Timezone:
          </Typography.Text>
        </Col>
        <Col>
          <Typography.Text
            editable={editInfo}
            level={4}
            style={{ margin: '0', textAlign: 'center' }}
          >
            {user && `${user.timezone}`}
          </Typography.Text>
        </Col>
        <Divider style={{ borderColor: 'light-gray', margin: '.4rem' }} />
      </Row>

      {/* Pronoun */}
      <Row justify='space-between' align='middle'>
        <Col>
          <Typography.Text strong level={4} style={{ margin: '0' }}>
            pro-noun:
          </Typography.Text>
        </Col>
        <Col>
          <Typography.Text
            editable={editInfo}
            level={4}
            style={{ margin: '0', textAlign: 'center' }}
          >
            {user && `${user.pronoun}`}
          </Typography.Text>
        </Col>
        <Divider style={{ borderColor: 'light-gray', margin: '.4rem' }} />
      </Row>

      {/* Birfdate */}
      <Row justify='space-between' align='middle'>
        <Col>
          <Typography.Text strong level={4} style={{ margin: '0' }}>
            Birthday:
          </Typography.Text>
        </Col>
        <Col>
          <Typography.Text
            editable={editInfo}
            level={4}
            style={{ margin: '0', textAlign: 'center' }}
          >
            {user && `${user.birthdate.slice(0, 10)}`}
          </Typography.Text>
        </Col>
        <Divider style={{ borderColor: 'light-gray', margin: '.4rem' }} />
      </Row>

      {/* Joined On */}
      <Row justify='space-between' align='middle'>
        <Col>
          <Typography.Text strong level={4} style={{ margin: '0' }}>
            Member since:
          </Typography.Text>
        </Col>
        <Col>
          <Typography.Text
            editable={editInfo}
            level={4}
            style={{ margin: '0', textAlign: 'center' }}
          >
            {user && `${user.created_at.slice(0, 10)}`}
          </Typography.Text>
        </Col>
        <Divider style={{ borderColor: 'light-gray', margin: '.4rem' }} />
      </Row>
      <br />
      <br />
      <Row justify='center' align='bottom'>
        <Col span='24'>
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
              {editInfo ? 'Submit' : 'Edit'}
            </Button>
          )}
        </Col>
      </Row>
    </section>
  );
};

export default UserInfo;
