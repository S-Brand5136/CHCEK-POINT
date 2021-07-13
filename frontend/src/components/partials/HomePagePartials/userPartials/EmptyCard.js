import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card, Row, Col } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const EmptyCard = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.push('/game/add');
  };

  return (
    <Card
      style={{ borderRadius: '20px', maxHeight: '17.15rem', minWidth: '15rem' }}
      hoverable
      cover={
        <Row justify='center'>
          <Col>
            <PlusCircleOutlined
              style={{
                borderRadius: '20px',
                fontSize: '3rem',
                position: 'relative',
                top: '5.5rem',
              }}
              className='game-card-image'
            />
          </Col>
        </Row>
      }
      onClick={clickHandler}
    >
      <Card.Meta
        className='main-font'
        style={{ textAlign: 'center' }}
        title='Add to your list!'
      />
    </Card>
  );
};

export default EmptyCard;
