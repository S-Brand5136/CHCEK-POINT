import React from 'react';

import { Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <div className='footer'>
      <Typography.Paragraph>
        © 2021 <strong>CHECK-POINT</strong>
        <span className='divider-highlight'> | </span>
        Created by Brandon, Astrid, and Pavneet during their time at Lighthouse
        Labs
      </Typography.Paragraph>
      {/* <div style={{ color: 'white', textAlign: 'center' }}>
        Github Repo:{' '}
        <GithubOutlined style={{ marginLeft: '1rem', fontSize: '24px' }} />
      </div> */}
    </div>
  );
};

export default Footer;
