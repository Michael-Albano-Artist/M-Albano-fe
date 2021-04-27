import React from 'react'
import { GalleryItem } from '../../types'
import { Image } from 'cloudinary-react';
import './ImageItem.css';
import { deleteImage } from '../../api-utils';
import { arrangeDate } from '../../utils';

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
            {(metadata.forSale === 'yes') &&
            <h5>{`$${metadata.price}`}</h5>
            }
            {(metadata.forSale === 'no') &&
            <h5>sold</h5>
            }
            {(metadata.forSale === 'not') &&
            <h5>not for sale</h5>
            }
            {metadata.eventDay &&
            <h5>{arrangeDate(metadata.eventDay)}</h5>
            }
          </>
          }

          
        <button 
          onClick={() => deleteImage(publicId)}
          className='delete-button'
          >Delete  
        </button>
      </div>
  )
}

export default ImageItem
