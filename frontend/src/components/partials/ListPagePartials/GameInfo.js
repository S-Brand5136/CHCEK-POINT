import { useEffect, useState } from 'react';

import { Row, Col, Form, Input } from 'antd';

const GameInfo = ({ game }) => {
  const [title, setTitle] = useState('');
  const [release, setRelease] = useState('');
  const [score, setScore] = useState('');
  const [esrb, setEsrb] = useState('');

  useEffect(() => {
    if (game) {
      setTitle(game[0].name);
    }
  }, [game]);

  return (
    <Row gutter={24}>
      <Col span={12}>
        <Form.Item label='Game Title' name='title'>
          <Input disabled defaultValue={title} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label='Release Date' name='date'>
          <Input disabled />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item label='Metacritic Score' name='email'>
          <Input disabled />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item label='ESRB Rating' name='esrv'>
          <Input disabled />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default GameInfo;
