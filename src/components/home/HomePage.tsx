import React from 'react'
import Header from '../header/Header'
import ImageList from '../images/ImageList'
import './HomePage.css'

const HomePage: React.FC = () => {
  return (
    <div className='home-box' >
      <div className='outer-header-box'>
        <Header forAdmin={false}/>
      </div>
      <div className='list-box'>
        <ImageList forAdmin={false}/>
      </div>
    </div>
  )
}

export default HomePage
