import React from 'react'
import { GalleryItem } from '../../types'
import { Image } from 'cloudinary-react';
import './ImageItem.css';

type Props = {
  image: GalleryItem;
  index: number;
}

const ImageItem: React.FC<Props> = ({ image, index }) => {
  const { publicId, metadata } = image;
  const cloudinaryName = process.env.REACT_APP_CLOUD_NAME;

  return (
    <div className='image-box'>

        <Image
            key={index}
            cloudName={cloudinaryName}
            publicId={publicId}
            width='300'
            crop='scale' 
        />

          {metadata &&

          <>
          <h4>{metadata.title}</h4>
          <h5>{metadata.medium}</h5>
          <h5>{metadata.dimensions}</h5>
          <h5>{(metadata.forSale === 'yes') 
            ? `$${image.metadata.price}`
            : 'sold'}</h5>
          </>

          }

      </div>
  )
}

export default ImageItem
