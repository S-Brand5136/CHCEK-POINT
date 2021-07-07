import React from 'react';

import { Row, Divider, Typography } from 'antd';

const UserActivity = () => {
  return (
    <Row>
      <Typography.Title level={3}>
        Check out the latest from other users!
      </Typography.Title>
      <Divider orientation='left'>User Activity</Divider>
    </Row>
  );
};

export default UserActivity;
