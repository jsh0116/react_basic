import React from 'react';
import Avatar from './components/Avatar';
import Navbar from './components/Navbar';

const AppWrap = (): JSX.Element => {
  return (
    <>
      <Navbar>
        <Avatar
          image='https://cdn.aitimes.com/news/photo/202204/143854_149286_5624.png'
        />
        <p>안녕하세요!</p>
      </Navbar>
    </>
  );
};

export default AppWrap;