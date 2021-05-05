import React from 'react';
import PopUp from '../contact/PopUp';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className='header-box' >
      <PopUp />
      <h1>Michael Albano</h1>
      <h2>Art</h2>
    </div>
  )
}

export default Header
