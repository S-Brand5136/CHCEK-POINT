import React from 'react';

import { Row, Col, Form, Input } from 'antd';

const ListInfo = ({ list }) => {
  return (
    <Row gutter={24}>
      <Col span={12}>
        <Form.Item label='List Title' name='title'>
          <Input
            className='placeholder-dark'
            disabled
            placeholder={list && list[0].list_title}
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label='Number of Games' name='date'>
          <Input
            className='placeholder-dark'
            disabled
            placeholder={list && list[0].count}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default ListInfo;
