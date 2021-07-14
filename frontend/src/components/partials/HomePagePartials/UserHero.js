import { Typography, Tabs } from 'antd';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  CompassOutlined,
  BarsOutlined,
  CommentOutlined,
} from '@ant-design/icons';

// components
import WelcomeBack from './Tab_Panes/WelcomeBack';
import UserCollections from './Tab_Panes/UserCollections';
import UserLists from './Tab_Panes/UserLists';
import UserActivity from './Tab_Panes/UserActivity';

// helpers
import filterLists from '../../../helpers/filter_lists';
import filterCollections from '../../../helpers/filter_collections';

const UserHero = ({ user }) => {
  // const [activeKey, setActiveKey] = useState('1');
  const [collection, setCollection] = useState(null);
  const [lists, setLists] = useState(null);
  const [reload, setReload] = useState(false);
  // let { key } = useParams();

  // const change = function (event) {
  //   setActiveKey(event);
  // };

  useEffect(() => {
    console.log('here');
    let mounted = true;
    axios.get(`/api/lists/user/${user.id}`).then((res) => {
      console.log(res.data);
      const lists = filterLists(res.data);
      const collection = filterCollections(res.data);

      console.log(collection, lists);
      if (mounted) {
        setCollection(collection);
        setLists(lists);
      }
    });
    return function cleanup() {
      mounted = false;
    };
  }, [reload]);

  // useEffect(() => {
  //   if (key === 'collections') setActiveKey('4');
  // }, []);
  // console.log('lists:', lists, 'collections:', collections);
  return (
    <>
      <Typography.Title
        level={1}
        className='title-font'
        style={{
          margin: '0rem 0rem 2rem 1rem',
          padding: '2rem 0rem 1rem 2rem',
        }}
      >
        Welcome Back, {user.username}!
      </Typography.Title>
      <Tabs
        tabPosition='left'
        // activeKey={activeKey}
        // onChange={setTimeout(() => {
        //   change();
        // }, 200)}
      >
        <Tabs.TabPane
          tab={
            <>
              <CompassOutlined
                style={{
                  marginRight: '.2rem',
                  textAlign: 'center',
                  fontSize: '16px',
                }}
              />
              Recently added
            </>
          }
          key='1'
        >
          <WelcomeBack />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <>
              <CommentOutlined />
              User Activity
            </>
          }
          key='2'
        >
          <UserActivity />
        </Tabs.TabPane>

        <Tabs.TabPane
          tab={
            <>
              <BarsOutlined
                style={{
                  marginRight: '.2rem',
                  textAlign: 'center',
                  fontSize: '16px',
                }}
              />
              My Lists
            </>
          }
          key='3'
        >
          <UserLists
            lists={lists}
            reload={() => setReload((state) => !state)}
          />
        </Tabs.TabPane>

        <Tabs.TabPane
          tab={
            <>
              <BarsOutlined
                style={{
                  marginRight: '.2rem',
                  textAlign: 'center',
                  fontSize: '16px',
                }}
              />
              My Collections
            </>
          }
          key='4'
        >
          <UserCollections
            collections={collection}
            reload={() => setReload((state) => !state)}
          />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default UserHero;
