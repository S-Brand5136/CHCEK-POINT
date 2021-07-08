import { Typography, Tabs } from 'antd';

// components
import WelcomeBack from './Tab_Panes/WelcomeBack';
import UserCollections from './Tab_Panes/UserCollections';
import UserLists from './Tab_Panes/UserLists';
import UserActivity from './Tab_Panes/UserActivity';

const UserHero = ({ user, lists, collections }) => {
  console.log(collections);

  return (
    <>
      <Typography.Title
        level={1}
        className='main-font'
        style={{ marginBottom: '2rem' }}
      >
        Welcome Back, {user.username}!
      </Typography.Title>
      <Tabs tabPosition='left'>
        <Tabs.TabPane tab='Explore' key='1'>
          <WelcomeBack />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Activity' key='2'>
          <UserActivity />
        </Tabs.TabPane>

        <Tabs.TabPane tab='Lists' key='3'>
          <UserLists lists={lists} />
        </Tabs.TabPane>

        <Tabs.TabPane tab='Collection' key='4'>
          <UserCollections collections={collections} />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default UserHero;
