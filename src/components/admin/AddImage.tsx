import React from 'react'
import Upload from './upload'

const AddImage: React.FC = () => {
  return (
    <div>
      <Upload 
        forEvent={false}
        publicIdForUpdate={''}
        page={'add-image'}
      />
    </div>
  )
}

export default AddImage
