import React from 'react';
import { bioText } from './bio-data.js';
import './Bio.css';

const About: React.FC = () => {
  return (
    <div className='bio-outer' >
      <p className='bio-text' >{bioText}</p>
    </div>
  )
}

export default About
