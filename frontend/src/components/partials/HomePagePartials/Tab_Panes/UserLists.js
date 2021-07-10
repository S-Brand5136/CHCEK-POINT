import { useEffect, useState } from 'react';
import { Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
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
      console.log(result);
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
            <Link to='/createList'>Click Here</Link> to start creating your own!
          </Typography.Title>
        </Col>
      ) : (
        <div>
          {userLists.length > 0 &&
            userLists.map((item, index) => <ListRow key={index} list={item} />)}
          <br />
          <Typography.Title level={5}>
            <Link to='/createList'>Click Here</Link> to create a new list!
          </Typography.Title>
        </div>
      )}
    </Row>
  );
};

export default UserLists;
