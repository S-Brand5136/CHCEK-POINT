import { useState, useEffect } from 'react';
import axios from 'axios';

import GameInfo from './GameInfo';
import PostResult from './PostResult';

import { Select, Form, Button, Spin, InputNumber } from 'antd';
import ListInfo from './ListInfo';

const AddForm = ({ userId, getDetails }) => {
  const [userLists, setUserLists] = useState(null);
  const [games, setGames] = useState(null);
  const [game, setGame] = useState(null);
  const [list, setList] = useState(null);
  const [hours, setHours] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (userId) {
      axios.get(`/api/lists/stats/${userId}`).then((res) => {
        setUserLists(res.data.list);
      });
    }
    axios.get(`/api/games`).then((res) => {
      setGames(res.data.catalog);
    });
  }, [userId]);

  const clickHandler = () => {
    if (game && list) {
      if (hours <= 0) setHours(0);
      setLoading(true);
      axios
        .put(`/api/lists/${list[0].id}/${game[0].id}`, {
          num_hours_played: hours,
          list_id: list[0].id,
          game_id: game[0].id,
        })
        .then((data) => {
          console.log(data);
        });
      getDetails(userId);
      setTimeout(() => {
        setLoading(false);
        setGame(null);
        setList(null);
        setHours(null);
        setSuccess(true);
      }, 2000);
    }
  };

  return (
    <section className='add-form'>
      {!success ? (
        <Form
          name='login'
          layout='vertical'
          style={{ margin: '5rem 5rem 5rem 5rem' }}
        >
          <Form.Item
            label='Select from our Catalog!'
            name='game'
            rules={[
              {
                required: true,
                message: 'Please pick a game from the Catalog!',
              },
            ]}
          >
            <Select
              onChange={(value) =>
                setGame(games.filter((item) => item.id === value))
              }
              showSearch
              placeholder='Search Catalog...'
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
              {games !== null &&
                games.map((item, index) => (
                  <Select.Option value={item.id} key={index}>
                    {item.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>

          <GameInfo game={game} />

          <Form.Item
            label='How many hours have you sunk into this game?'
            name='hours'
            rules={[{ required: true, message: 'Please input your hours!' }]}
          >
            <InputNumber
              style={{ width: '100%' }}
              min={0}
              onChange={(value) => setHours(value)}
            />
          </Form.Item>

          <Form.Item
            label='Select which collection or list to add to!'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Select
              onChange={(value) =>
                setList(userLists.filter((item) => item.id === value))
              }
              showSearch
              placeholder='Search lists...'
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
                  <Select.Option value={item.id} key={index}>
                    {item.list_title}
                  </Select.Option>
                ))}
            </Select>{' '}
          </Form.Item>

          <ListInfo list={list} />

          <Form.Item style={{ textAlign: 'center' }}>
            {!loading ? (
              <Button
                type='primary'
                shape='round'
                onClick={() => {
                  clickHandler();
                }}
                block
              >
                Submit
              </Button>
            ) : (
              <Spin />
            )}
          </Form.Item>
        </Form>
      ) : (
        <PostResult
          result='success'
          title='Successfully added game!'
          subTitle='Add another game or return to the Home page!'
          success={() => setSuccess(false)}
        />
      )}
    </section>
  );
};

export default AddForm;
