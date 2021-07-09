import { useState, useEffect } from 'react';
import axios from 'axios';

import { Row, Col, Select, Form, Button, Spin, Input } from 'antd';
import getNames from '../../../helpers/get_list_names';

const AddForm = ({ userId }) => {
  const [loading, setLoading] = useState(false);
  const [userLists, setUserLists] = useState(null);
  const [games, setGames] = useState(null);

  useEffect(() => {
    axios.get(`/api/lists/${userId}`).then((res) => {
      setUserLists(res.data.data);
    });
    axios.get(`/api/games`).then((res) => {
      setGames(res.data.catalog);
    });
  }, [userId]);

  return (
    <section className='add-form'>
      <Form
        name='login'
        layout='vertical'
        style={{ margin: '5rem 5rem 5rem 5rem' }}
      >
        <Form.Item
          label='Select from our Catalog!'
          name='game'
          rules={[
            { required: true, message: 'Please pick a game from the catalog!' },
          ]}
        >
          <Select
            showSearch
            placeholder='Search lists..'
            optionFilterProp='children'
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            {' '}
            {games !== null &&
              games.map((item, index) => (
                <Select.Option value={item.name} key={index}>
                  {item.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item
          label='Select which collection or list to add too!'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Select
            showSearch
            placeholder='Search lists..'
            optionFilterProp='children'
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            {userLists !== null &&
              userLists.map((item, index) => (
                <Select.Option value={item.list_title} key={index}>
                  {item.list_title}
                </Select.Option>
              ))}
          </Select>{' '}
        </Form.Item>
        <Form.Item style={{ textAlign: 'center' }}>
          {!loading ? (
            <Button type='primary' shape='round' block>
              Login
            </Button>
          ) : (
            <Spin />
          )}
        </Form.Item>
      </Form>
    </section>
  );
};

export default AddForm;
