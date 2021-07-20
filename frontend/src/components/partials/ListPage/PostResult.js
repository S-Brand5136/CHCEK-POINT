import React from 'react';

import { useHistory } from 'react-router-dom';

import { Result, Button } from 'antd';

const PostResult = ({ result, title, subTitle, success }) => {
  const history = useHistory();

  const reSubmit = () => {
    success();
  };

  const returnHome = () => {
    history.push('/');
  };

  return (
    <Result
      style={{ marginTop: '12rem' }}
      status={result}
      title={title}
      subTitle={subTitle}
      extra={[
        <Button onClick={() => reSubmit()} type='primary' key='console'>
          Add Another
        </Button>,
        <Button onClick={() => returnHome()} key='buy'>
          Return Home
        </Button>,
      ]}
    ></Result>
  );
};

export default PostResult;
