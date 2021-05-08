import React from 'react'
import Header from '../header/Header'
import ImageList from '../images/ImageList'
import './AdminPage.css'

const AdminPage: React.FC = () => {
  return (
    <div className='admin-page-outer' >
      <div className='admin-header-box'>
        <Header forAdmin/>
      </div>
      <ImageList forAdmin />
    </div>
  )
}

export default AdminPage
