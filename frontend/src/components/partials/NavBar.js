import React from 'react';
import '../../styles/NavBar.less';
import Title from './Title';
import { useState, useContext } from 'react';
import { Button, Image } from 'antd';
import { authContext } from '../../providers/AuthProvider';
import LoginForm from '../partials/LoginForm';
import RegisterForm from '../partials/RegisterForm';
import logo from '../../img/logo.png';

const NavLinks = () => {
  const [isLoginVisible, setisLoginVisible] = useState(false);
  const [isRegisterVisible, setisRegisterVisible] = useState(false);

  const showLoginModal = () => {
    setisLoginVisible(true);
  };

  const showRegisterModal = () => {
    setisRegisterVisible(true);
  };

  return (
    <nav className='nav-links'>
      <div className='nav-logo-links'>
        <Title></Title>
      </div>
      <div className='nav-center-links'>
        <a className='nav-link' href='/'>
          Browse
        </a>

        <a className='nav-link' href='/'>
          Search
        </a>

        <a className='nav-link' href='/'>
          Collection
        </a>
      </div>
      <div className='nav-user-links'>
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
      </div>
    </nav>
  );
};

export default NavLinks;
