import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { List, Row, Divider, Typography } from 'antd';

const UserActivity = () => {
  const data = [
    'Pav added Minecraft to their Backlog',
    'Brandon added Dark Souls to their Completed',
    'Astrid added Hamtaro to their Completed',
    'Brandon added Hamtaro to their Wishlist',
  ];
  const [activity, setActivity] = useState(['']);
  useEffect(() => {
    axios.get('/api/lists/activity').then((res) => {
      console.log(res.data.list);
      let mappedActivity = res.data.list.map((item) => {
        return (
          <Link
            to={`/games/${item.game_id}`}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <i class='fas fa-list'></i> {item.username} added {item.name} to
            their list: {item.list_title}
          </Link>
        );
      });
      setActivity(mappedActivity);
    });
  }, []);

  return (
    <Row>
      <Typography.Title level={3}>
        Check out the latest from other users!
      </Typography.Title>
      <Divider orientation='left'>User Activity</Divider>
      <List
        dataSource={activity}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text italic>{item}</Typography.Text>
          </List.Item>
        )}
      />
    </Row>
  );
};

export default UserActivity;
