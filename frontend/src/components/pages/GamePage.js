import React from 'react';

import { Layout } from 'antd';

const GamePage = ({ location }) => {
  console.log(location.pathname.slice(-1));

  return <Layout>individual game page!</Layout>;
};

export default GamePage;
