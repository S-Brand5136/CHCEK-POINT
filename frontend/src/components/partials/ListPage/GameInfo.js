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
      setRelease(game[0].released.slice(0, 11));
      setScore(game[0].metacritic_score);
      setEsrb(game[0].esrb_rating !== 'null' ? game[0].esrb_rating : 'N/A');
    }
  }, [game]);

  return (
    <Row gutter={24}>
      <Col span={12}>
        <Form.Item label='Game Title' name='title'>
          <Input className='placeholder-dark' disabled placeholder={title} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label='Release Date' name='date'>
          <Input className='placeholder-dark' disabled placeholder={release} />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item label='Metacritic Score' name='email'>
          <Input className='placeholder-dark' disabled placeholder={score} />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item label='ESRB Rating' name='esrv'>
          <Input className='placeholder-dark' disabled placeholder={esrb} />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default GameInfo;
