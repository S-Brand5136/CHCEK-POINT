import { React, useEffect } from 'react';
import '../../styles/NavBar.less';
import Title from './Title';
import { useState, useContext } from 'react';

import { Button, Image } from 'antd';
import { authContext } from '../../providers/AuthProvider';
import LoginForm from '../partials/LoginForm';
import RegisterForm from '../partials/RegisterForm';
import SearchForm from '../partials/SearchForm';
import logo from '../../img/logo.png';

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

  const navigateBrowse = () => {
    window.location = '/browse';
  };

  const { user, getUserDetails, logout } = useContext(authContext);

  useEffect(() => {
    if (user) {
      getUserDetails(user.id);
    }
  }, [user, getUserDetails]);

  return (
    <nav className='nav-links'>
      <div className='nav-logo-links'>
        <Title></Title>
      </div>
      <div className='nav-center-links'>
        <button className='nav-link' onClick={navigateBrowse}>
          Browse
        </button>

        <button className='nav-link' onClick={showSearchModal}>
          Search
        </button>

        <SearchForm
          visible={isSearchVisible}
          setVisible={() => setisSearchVisible(!isSearchVisible)}
        />

        <button className='nav-link' href='/'>
          Collection
        </button>
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
