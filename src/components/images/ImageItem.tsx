import React from 'react'
import { GalleryItem } from '../../types'
import { Image } from 'cloudinary-react';
import './ImageItem.css';
import { arrangeDate, convertPublicId } from '../../utils';
import { Link } from 'react-router-dom';
import { removeImage } from '../../actions/imageActions';
import { useDispatch } from 'react-redux';


type Props = {
  image: GalleryItem;
  index: number;
  forEvent: boolean;
}

const ImageItem: React.FC<Props> = ({ image, index, forEvent }) => {
  const { publicId, metadata } = image;
  const cloudinaryName = process.env.REACT_APP_CLOUD_NAME;
  const dispatch = useDispatch();
  const updateId = convertPublicId(publicId);

  const handleDelete = () => {
    dispatch(removeImage(publicId))
    
  }
  
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
            {forEvent &&
              <h5>{arrangeDate(metadata.eventDay)}</h5>
            }
            
          </>
          }

        <Link 
          to={!forEvent 
            ? `/update/${updateId}` 
            : `/update/event/${updateId}`}>
          <button>Update</button>
        </Link>

        <button 
          onClick={handleDelete}
          className='delete-button'
          >Delete  
        </button>
      </div>
  )
}

export default ImageItem
