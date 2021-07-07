import React from 'react';
import { Row, Col, Typography } from 'antd';

const UserLists = ({ lists }) => {
  return (
    <Row>
      {Object.keys(lists).length <= 0 ? (
        <Col>
          <Typography.Title level={3}>
            You havn't made any lists yet
          </Typography.Title>
          <Typography.Title level={5}>
            <a href='/games'>Click Here</a> to start creating your own!
          </Typography.Title>
        </Col>
      ) : (
        <div> </div>
      )}
    </Row>
  );
};

export default UserLists;
