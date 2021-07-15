import { React, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { authContext } from '../../providers/AuthProvider';

import Title from './Title';
import LoginForm from '../partials/LoginForm';
import RegisterForm from '../partials/RegisterForm';
import SearchForm from '../partials/SearchForm';
import Notification from './Notification';

import { Button, Menu, Dropdown, Image } from 'antd';
import {
  DownOutlined,
  ProfileOutlined,
  UnorderedListOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const NavLinks = () => {
  const [isLoginVisible, setisLoginVisible] = useState(false);
  const [isRegisterVisible, setisRegisterVisible] = useState(false);
  const [isSearchVisible, setisSearchVisible] = useState(false);

  const history = useHistory();

  const showLoginModal = () => {
    setisLoginVisible(true);
  };

  const showRegisterModal = () => {
    setisRegisterVisible(true);
  };

  const showSearchModal = () => {
    setisSearchVisible(true);
  };

  const showCollectionNotification = () => {
    Notification({
      type: 'error',
      description: 'You must be logged in to access Collections!',
      title: 'Error',
    });
  };

  const { user, logout } = useContext(authContext);

  const logoutHandler = () => {
    logout();
    history.push('/');
  };

  const userMenu = (
    <Menu className='menu'>
      <Menu.Item key='0' className='menu-item'>
        <Link to={user ? `/users/${user.id}` : '/'}>
          <ProfileOutlined
            style={{ marginRight: '.7rem', fontSize: '16px', color: 'purple' }}
          />{' '}
          View Profile
        </Link>
      </Menu.Item>
      <Menu.Item key='1' className='menu-item'>
        <Link to='/list/create'>
          <UnorderedListOutlined
            style={{ marginRight: '.7rem', fontSize: '16px', color: 'purple' }}
          />{' '}
          Create List
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3' onClick={() => logoutHandler()} className='menu-item'>
        <LogoutOutlined
          style={{ marginRight: '.7rem', fontSize: '16px', color: 'purple' }}
        />{' '}
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className='nav-links'>
      <div className='nav-logo-links'>
        <Title></Title>
      </div>
      <div className='nav-center-links'>
        <Link
          to={`/browse/${'games'}`}
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <button className='nav-link'>Browse</button>
        </Link>
        <button className='nav-link' onClick={showSearchModal}>
          Search
        </button>

        <SearchForm
          visible={isSearchVisible}
          setVisible={() => setisSearchVisible(!isSearchVisible)}
        />
        {!user ? (
          <button className='nav-link' onClick={showCollectionNotification}>
            Collection
          </button>
        ) : (
          <Link
            to='/collections'
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <button className='nav-link'>Collection</button>
          </Link>
        )}
      </div>
      <div className='nav-user-links'>
        {!user ? (
          <div>
            <Button
              type='primary'
              shape='round'
              className='nav-button'
              onClick={showLoginModal}
            >
              Login
            </Button>
            <Button
              className='nav-button'
              type='primary'
              shape='round'
              onClick={showRegisterModal}
            >
              Register
            </Button>
            <LoginForm
              visible={isLoginVisible}
              setVisible={() => setisLoginVisible(!isLoginVisible)}
            />
            <RegisterForm
              visible={isRegisterVisible}
              setVisible={() => {
                setisRegisterVisible(false);
              }}
            />
          </div>
        ) : (
          <>
            <div className='logged-in-message'>
              <Dropdown overlay={userMenu} trigger={['click']}>
                <div className='ant-dropdown-link animation drop-down'>
                  <Image width={60} preview={false} src={user && user.avatar} />
                  <DownOutlined style={{ fontSize: '18px' }} />
                </div>
              </Dropdown>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavLinks;
