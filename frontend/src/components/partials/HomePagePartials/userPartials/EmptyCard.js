import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card, Row, Col } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const EmptyCard = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.push('/lists');
  };

  return (
    <Card
      style={{ borderRadius: '20px' }}
      hoverable
      cover={
        <Row justify='center'>
          <Col>
            <PlusCircleOutlined
              style={{
                borderRadius: '20px',
                fontSize: '3rem',
                position: 'relative',
                top: '3.5rem',
              }}
              className='game-card-image'
            />
          </Col>
        </Row>
      }
      onClick={clickHandler}
    >
      <Card.Meta className='main-font' title='Add to one of your lists!' />
    </Card>
  );
};

export default EmptyCard;
