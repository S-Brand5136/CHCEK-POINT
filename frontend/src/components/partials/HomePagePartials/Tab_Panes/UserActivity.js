import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { List, Row, Divider, Typography, Skeleton } from 'antd';

const UserActivity = ({ limit }) => {
  // Back up data in case we need it
  // const data = [
  //   'Pav added Minecraft to their Backlog',
  //   'Brandon added Dark Souls to their Completed',
  //   'Astrid added Hamtaro to their Completed',
  //   'Brandon added Hamtaro to their Wishlist',
  // ];

  const [activity, setActivity] = useState(['']);
  const [loading, setLoading] = useState(true);

  function mappedActivity(res) {
    let mappedActivity = res.map((item) => {
      return (
        <div className='user-activity'>
          <Link
            to={`/games/${item.game_id}`}
            style={{
              color: 'inherit',
              textDecoration: 'inherit',
            }}
          >
            <Typography.Title
              level={4}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <img src={item.avatar} alt='' style={{ height: '5rem' }} />
              {item.username}
              <span
                className='divider-highlight'
                style={{ marginLeft: '.7rem' }}
              >
                |
              </span>
              <img
                src={item.background_image}
                alt=''
                style={{
                  height: '5rem',
                }}
                className='gameLogo'
              />
            </Typography.Title>
            <div style={{ marginLeft: '5rem' }}>
              <Typography.Text style={{ fontSize: '18px' }}>
                Recently added <strong>{item.name}</strong> to their list:{' '}
                <strong>{item.list_title}</strong>
              </Typography.Text>
            </div>
          </Link>
        </div>
      );
    });
    setActivity(mappedActivity);
  }

  useEffect(() => {
    axios
      .get('/api/lists/users/activity')
      .then((res) => {
        if (limit) {
          mappedActivity(res.data.list.slice(0, limit));
        } else {
          mappedActivity(res.data.list);
        }
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [limit]);

  return (
    <Row style={{ paddingBottom: '2rem' }}>
      {limit ? (
        ''
      ) : (
        <>
          <Typography.Title level={3}>
            Check out the latest from other users!
          </Typography.Title>
          <Divider orientation='left'>User Activity</Divider>
        </>
      )}
      {loading ? (
        <Skeleton active />
      ) : (
        <List
          dataSource={activity}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text italic>{item}</Typography.Text>
            </List.Item>
          )}
        />
      )}
    </Row>
  );
};

export default UserActivity;
