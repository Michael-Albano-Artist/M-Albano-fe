import React from 'react';
import { Link } from 'react-router-dom';
import PopUp from '../../popup/PopUp';
import './Header.css';

interface Props {
  forAdmin: boolean;
}

const Header: React.FC<Props> = ({ forAdmin }) => {
  return (
    <div className='header-box' >
      {!forAdmin &&
        <nav className='ui-items' >
          <PopUp content='contact'/>
          <PopUp content='bio' />
          <PopUp content='music' />
        </nav>
      }
      {forAdmin &&
        <nav className='admin-links' >
          <Link to='/image'>add-image</Link>
          <Link to='/event'>add-event</Link>
          <Link to='/'>home</Link>
        </nav>
      }
      <h1>Michael Albano</h1>
      <h2>Art</h2>
    </div>
  )
}

export default Header
