import React from 'react'
import Upload from './upload'

const AddEvent: React.FC = () => {
  return (
    <div>
      <Upload 
        forEvent={true} 
        publicIdForUpdate={''} 
        page={'add-event'}
      />
    </div>
  )
}

export default AddEvent
