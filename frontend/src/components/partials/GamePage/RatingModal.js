import { useState, useEffect } from 'react';
import axios from 'axios';

import { Button, Modal, Form, Row, Col, InputNumber } from 'antd';

const RatingModal = ({ visible, cancel, game, user, reload }) => {
  const [userRating, setUserRating] = useState({});

  useEffect(() => {
    if (game && user) {
      setUserRating({ game_id: game.id, user_id: user.id, rating: 0 });
    }
  }, [game, user]);

  const submitHandler = () => {
    if (userRating) {
      axios.post(`/api/ratings/`, { userRating }).then((res) => {
        reload();
        cancel();
      });
    }
  };

  return (
    <Modal
      title='Post Game Rating'
      footer={<> </>}
      visible={visible}
      onCancel={cancel}
    >
      <h2 style={{ textAlign: 'center' }}>
        {' '}
        Tell us how much you enjoyed this title!
      </h2>
      <h4 style={{ textAlign: 'center' }}>Rate the game on a scale of 100</h4>
      <Form name='login' layout='vertical'>
        <Row justify='center'>
          <InputNumber
            min={1}
            max={100}
            onChange={(value) =>
              setUserRating({ ...userRating, rating: value })
            }
            style={{ marginBottom: '2rem', width: '200px' }}
          />
        </Row>
        <Row justify='center' style={{ marginBottom: '1rem' }}>
          <h4>Health: {userRating && `${userRating.rating}%`}</h4>
          <div className='rating-bar'>
            <div
              className='rating-health'
              style={{
                width: `${userRating && userRating.rating * 4.98}px`,
              }}
            ></div>
          </div>
        </Row>
        <Row justify='center'>
          <Col span={8}>
            <Button
              type='primary'
              onClick={(e) => submitHandler(e)}
              shape='round'
              block
            >
              Rate!
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default RatingModal;
