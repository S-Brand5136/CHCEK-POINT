import React from 'react';
import 'styles/NavBar.scss';

const Title = () => {
  return (
    <div className='title'>
      <h1>
        <a href='/'>CHECK-POINT</a>
      </h1>
    </div>
  );
};

const NavLinks = () => {
  return (
    <div className='nav-links'>
      <a className='nav-link' href='/'>
        Link
      </a>
      <a className='nav-link' href='/'>
        Link
      </a>
      <a className='nav-link' href='/'>
        Link
      </a>
    </div>
  );
};
