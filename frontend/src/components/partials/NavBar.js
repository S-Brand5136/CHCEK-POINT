import { React, useEffect, useState, useContext } from 'react';
import '../../styles/NavBar.less';
import Title from './Title';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { authContext } from '../../providers/AuthProvider';
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

  const showcollectionModal = () => {
    setisSearchVisible(true);
  };

  const { user, logout } = useContext(authContext);

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
          <button className='nav-link' href='/'>
            Collection
          </button>
        ) : (
          <button className='nav-link' href='/'>
            Collection
          </button>
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
              Hey, {user.username}!
              <Button type='primary' onClick={logout}>
                Logout
              </Button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavLinks;
