import React from 'react';
import babyface  from '../../assets/babyface-smaller.png';
import './LoadingScreen.css';

const Loading: React.FC = () => {
  return (
    <div className='loading-box'>
      <img 
        src={babyface} 
        className='babyface' 
        alt='babyface loading'
      />
      <h1 className='loading-banner' >Loading</h1>
    </div>
  )
}

export default Loading
