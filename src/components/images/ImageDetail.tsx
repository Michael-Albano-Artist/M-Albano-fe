import React from 'react'
import { useParams } from 'react-router'
import { restorePublicId } from '../../utils/utils';
import { Image } from 'cloudinary-react';
import './ImageDetail.css';
import { Link } from 'react-router-dom';

const ImageDetail: React.FC = () => {
  const { linkId } = useParams<any>();
  const publicId = restorePublicId(linkId);
  const cloudinaryName = process.env.REACT_APP_CLOUD_NAME;

  return (
    <div className='detail-outer' >
      <nav>
        <Link 
          to='/'
          className='detail-link'
        >{'<back'}
        </Link>
      </nav>
       <Image
            key={publicId}
            cloudName={cloudinaryName}
            publicId={publicId}
            width='600'
            crop='scale' 
        />
    </div>
  )
}

export default ImageDetail
