import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import ListRow from '../userPartials/ListRow';

import { Button, Col, Typography } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

const UserLists = ({ lists }) => {
  const [userLists, setUserLists] = useState([]);

  const history = useHistory();

  useEffect(() => {
    if (lists) {
      const result = [];
      for (const list in lists) {
        result.push([list, ...lists[list]]);
      }
      setUserLists(result);
    }
  }, [lists]);

  return (
    <>
      <Typography.Title level={5}>
        <Button
          type='primary'
          shape='round'
          onClick={() => history.push('/list/create')}
        >
          <UnorderedListOutlined /> Create New List
        </Button>
      </Typography.Title>
      <div>
        {Object.keys(lists).length <= 0 ? (
          <Col>
            <Typography.Title level={3}>
              You havn't made any lists yet
            </Typography.Title>
          </Col>
        ) : (
          <div>
            {userLists.length > 0 &&
              userLists.map((item, index) => (
                <ListRow key={index} list={item} />
              ))}
            <br />
          </div>
        )}
      </div>
    </>
  );
};

export default UserLists;
