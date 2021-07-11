import { React, useEffect, useState, useContext } from 'react';
import '../../styles/NavBar.less';
import Title from './Title';
import { Link } from 'react-router-dom';
import { Button, Menu, Dropdown, Image } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { authContext } from '../../providers/AuthProvider';
import avatar from '../../img/avatars/villain.png';
import LoginForm from '../partials/LoginForm';
import RegisterForm from '../partials/RegisterForm';
import SearchForm from '../partials/SearchForm';
import Notification from './Notification';

const NavLinks = () => {
  const [isLoginVisible, setisLoginVisible] = useState(false);
  const [isRegisterVisible, setisRegisterVisible] = useState(false);
  const [isSearchVisible, setisSearchVisible] = useState(false);

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

  const userMenu = (
    <Menu>
      <Menu.Item key='0'>
        <a href='/users/:id'>View Profile</a>
      </Menu.Item>
      <Menu.Item key='1'>
        <a href='/list/create'>Create List</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3' onClick={logout}>
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
          <a
            href='/collections'
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <button className='nav-link'>Collection</button>
          </a>
        )}
      </div>
      <div className='nav-user-links'>
        {!user ? (
          <div>
            <Button type='primary' onClick={showLoginModal}>
              Login
            </Button>
            <Button type='primary' onClick={showRegisterModal}>
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
            <div className='loggedinmessage'>
              {/* Hey, {user.username}! */}
              <Dropdown overlay={userMenu} trigger={['click']}>
                <a
                  className='ant-dropdown-link'
                  onClick={(e) => e.preventDefault()}
                >
                  <Image width={60} preview={false} src={avatar} />
                  <DownOutlined />
                </a>
              </Dropdown>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavLinks;
