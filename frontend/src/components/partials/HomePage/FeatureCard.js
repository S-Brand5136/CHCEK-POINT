import React from 'react';

import { Card, Typography } from 'antd';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <Card size='small' bordered={false} className='card'>
      <div className='card-title'>
        <Typography.Title level={2} style={{ margin: '0' }}>
          {icon}
          {title}
        </Typography.Title>
      </div>
      <div className='card-body'>
        <Typography.Paragraph>{description}</Typography.Paragraph>
      </div>
    </Card>
  );
};

export default FeatureCard;
