import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import ListRow from '../userPartials/ListRow';

import { Button, Col, Typography } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

const UserLists = ({ lists, reload }) => {
  const [userLists, setUserLists] = useState(null);

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
        {Object.keys(lists).length < 1 ? (
          <Col>
            <Typography.Title level={2}>
              Start by creating a new List
            </Typography.Title>
          </Col>
        ) : (
          <div>
            {userLists &&
              userLists.map((item, index) => (
                <ListRow key={index} list={item} reload={reload} />
              ))}
            <br />
          </div>
        )}
      </div>
    </>
  );
};

export default UserLists;
