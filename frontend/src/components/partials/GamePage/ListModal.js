import { useState, useEffect } from 'react';
import getNames from '../../../helpers/get_list_names';
import Notification from '../Notification';
import axios from 'axios';

import {
  Modal,
  Form,
  Button,
  Select,
  InputNumber,
  Row,
  Col,
  Typography,
} from 'antd';

const ListModal = ({
  game,
  visible,
  cancel,
  lists,
  collection,
  getDetails,
  userId,
}) => {
  const [insert, setInsert] = useState(null);
  const [numHours, setNumHours] = useState(0);
  const [userLists, setUserLists] = useState(null);
  useEffect(() => {
    if (lists) {
      setUserLists(getNames(lists, collection));
    }
  }, [lists, collection]);

  const submitHandler = (e) => {
    if (insert) {
      const id = userLists.filter((item) => item.title === insert)[0].id;

      const newGame = {
        num_hours_played: numHours,
        list_id: id,
        game_id: game.id,
      };
      console.log(newGame);
      axios.put(`/api/lists/${id}/${game.id}`, newGame).then(() => {
        Notification({
          type: 'success',
          description: 'Succesfully added Game!',
          title: 'Game Added!',
        });
        getDetails(userId);
        cancel();
      });
    }
  };

  return (
    <Modal footer={<> </>} visible={visible} onCancel={cancel}>
      <h2 style={{ textAlign: 'center' }}>Add to a List or Collection!</h2>
      <Form name='login' layout='vertical'>
        <Row justify='center'>
          <Typography.Title level={5}>
            Add to one of your Collections! Or search amongst your Lists
          </Typography.Title>
        </Row>
        <Row justify='center' style={{ marginTop: '1rem' }}>
          <Col span={10}>
            <Form.Item>
              <Select
                showSearch
                placeholder='Search lists..'
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
                onChange={(e) => {
                  setInsert(e);
                }}
              >
                {userLists !== null &&
                  userLists.map((item, index) => (
                    <Select.Option value={item.title} key={index}>
                      {item.title}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row justify='center'>
          <Col span={8}>
            <Form.Item label='Number of Hours Played' name='Hours'>
              <InputNumber min={1} onChange={(value) => setNumHours(value)} />
            </Form.Item>
          </Col>
        </Row>
        <Row justify='center' style={{ marginBottom: '1rem' }}>
          <Typography.Title level={5}>Insert into: {insert}</Typography.Title>
        </Row>
        <Row justify='center'>
          <Col span={8}>
            <Button
              type='primary'
              onClick={(e) => submitHandler(e)}
              shape='round'
              block
            >
              Accept
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default ListModal;
