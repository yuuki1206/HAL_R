import React from 'react';
import Nav from '../layouts/Nav.jsx';
import HeloImage from '../layouts/HeloImage.jsx';

const Header = () => {
  return(
    <header>
      <Nav></Nav>
      <HeloImage></HeloImage>
    </header>
  );
}

export default Header;