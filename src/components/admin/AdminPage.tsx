import React from 'react'
import Header from '../header/Header'
import ImageList from '../images/ImageList'

const AdminPage: React.FC = () => {
  return (
    <div>
      <Header forAdmin/>

      <ImageList forAdmin />
    </div>
  )
}

export default AdminPage
