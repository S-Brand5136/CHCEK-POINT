import React from 'react';

import { Typography } from 'antd';

const Footer = () => {
  return (
    <div className='footer'>
      <Typography.Paragraph>
        © 2021 <strong>CHECK-POINT</strong>
        <span className='divider-highlight'> | </span>
        Created by Brandon, Astrid, and Pavneet during their time at Lighthouse
        Labs
      </Typography.Paragraph>
    </div>
  );
};

export default Footer;
