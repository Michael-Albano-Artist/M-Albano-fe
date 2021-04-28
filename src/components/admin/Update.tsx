import React from 'react'
import { useParams } from 'react-router'
import ImageList from '../images/ImageList'
import Upload from './upload'

const Update: React.FC = () => {
  const publicId: string = useParams();
  console.log(publicId, 'update')
  return (
    <div>
      <ImageList forEvents/>
      <h1>what the fuck</h1>
      <Upload forEvent={false} publicIdForUpdate={publicId} />
    </div>
  )
}

export default Update
