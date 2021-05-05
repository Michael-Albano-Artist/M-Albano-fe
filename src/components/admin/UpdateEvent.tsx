import React from 'react'
import { useParams } from 'react-router'
import { restorePublicId } from '../../utils';
import Upload from './upload';

const UpdateEvent: React.FC = () => {

  const { updateId } = useParams<any>();
  const id = restorePublicId(updateId);

  return (
    <div>
      <Upload forEvent publicIdForUpdate={id} page={'update-event'} />
    </div>
  )
}

export default UpdateEvent
