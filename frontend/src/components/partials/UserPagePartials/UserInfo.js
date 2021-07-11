import { useState, useEffect } from 'react';

import { Row, Col, Typography, Divider, Button, Spin } from 'antd';
import Notification from '../Notification';

// TODO: Hook up fake way of udpating info ( ant.design typography editable is being dumb )

const UserInfo = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [editInfo, setEditInfo] = useState(false);

  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (user) {
      setUserDetails(user);
    }
  }, [user]);

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
          <Typography.Title
            className='title-font'
            level={3}
            style={{ marginBottom: '1rem' }}
          >
            User Info <span className='divider-highlight'> | </span>
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
            {userDetails && `${userDetails.username}`}
          </Typography.Text>
        </Col>
        <Divider style={{ borderColor: 'light-gray', margin: '.4rem' }} />
      </Row>

      {/* email */}
      <Row justify='space-between' align='middle'>
        <Col>
          <Typography.Text strong level={4} style={{ margin: '0' }}>
            Email:
          </Typography.Text>
        </Col>
        <Col>
          <Typography.Text
            editable={editInfo}
            level={4}
            style={{ margin: '0', textAlign: 'center' }}
          >
            {userDetails && `${userDetails.email}`}
          </Typography.Text>
        </Col>
        <Divider style={{ borderColor: 'light-gray', margin: '.4rem' }} />
      </Row>

      {/* discord_name */}
      <Row justify='space-between' align='middle'>
        <Col>
          <Typography.Text strong level={4} style={{ margin: '0' }}>
            Discord Tag:
          </Typography.Text>
        </Col>
        <Col>
          <Typography.Text
            editable={editInfo}
            level={4}
            style={{ margin: '0', textAlign: 'center' }}
          >
            {userDetails && `${userDetails.discord_username}`}
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
            {userDetails && `${userDetails.timezone}`}
          </Typography.Text>
        </Col>
        <Divider style={{ borderColor: 'light-gray', margin: '.4rem' }} />
      </Row>

      {/* Pronoun */}
      <Row justify='space-between' align='middle'>
        <Col>
          <Typography.Text strong level={4} style={{ margin: '0' }}>
            Pronouns:
          </Typography.Text>
        </Col>
        <Col>
          <Typography.Text
            editable={editInfo}
            level={4}
            style={{ margin: '0', textAlign: 'center' }}
          >
            {userDetails && `${userDetails.pronoun}`}
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
            {userDetails && `${userDetails.birthdate.slice(0, 10)}`}
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
            {userDetails && `${userDetails.created_at.slice(0, 10)}`}
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
