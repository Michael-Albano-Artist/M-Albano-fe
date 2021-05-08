import React from 'react'
import { bands } from './music-data';
import './Music.css';

const Music: React.FC = () => {
  const musicElements = bands.map(band => (
    <li key={band.name} >
      <h4 className='band-name' >{band.name}</h4>
      <a 
        href={band.link}
        className='band-link'
      >
        {`check out ${band.name} here!`}
      </a>
    </li>
  ))
  return (
    <div className='music-box-outer' >
      <ul>
        {musicElements}
      </ul>
    </div>
  )
}

export default Music
