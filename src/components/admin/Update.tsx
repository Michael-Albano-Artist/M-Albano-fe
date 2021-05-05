import React from 'react'
import { useParams } from 'react-router'
import { restorePublicId } from '../../utils'
import Upload from './upload'

const Update: React.FC = () => {

  const { updateId } = useParams<any>();
  const id = restorePublicId(updateId);

    return (
      <div>
        <Upload forEvent={false} publicIdForUpdate={id} page={'update'} />
      </div>
    )
}

export default Update
