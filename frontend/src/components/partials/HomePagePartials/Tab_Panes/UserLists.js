import { useEffect, useState } from 'react';
import { Row, Col, Typography } from 'antd';

import ListRow from '../userPartials/ListRow';

const UserLists = ({ lists }) => {
  const [userLists, setUserLists] = useState([]);

  useEffect(() => {
    console.log('here');
    if (lists) {
      const result = [];
      for (const list in lists) {
        result.push([list, ...lists[list]]);
      }
      setUserLists(result);
    }
  }, [lists]);

  return (
    <Row>
      {Object.keys(lists).length <= 0 ? (
        <Col>
          <Typography.Title level={3}>
            You havn't made any lists yet
          </Typography.Title>
          <Typography.Title level={5}>
            <a href='/games'>Click Here</a> to start creating your own!
          </Typography.Title>
        </Col>
      ) : (
        <div>
          {userLists.length > 0 &&
            userLists.map((item, index) => <ListRow key={index} list={item} />)}
        </div>
      )}
    </Row>
  );
};

export default UserLists;
