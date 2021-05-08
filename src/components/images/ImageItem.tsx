import React from 'react'
import { GalleryItem } from '../../types'
import { Image } from 'cloudinary-react';
import './ImageItem.css';
import { arrangeDate, convertPublicId } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { removeImage } from '../../actions/imageActions';
import { useDispatch } from 'react-redux';


type Props = {
  image: GalleryItem;
  index: number;
  forEvent: boolean;
  forAdmin: boolean;
}

const ImageItem: React.FC<Props> = ({ image, index, forEvent, forAdmin }) => {
  const { publicId, metadata } = image;
  const cloudinaryName = process.env.REACT_APP_CLOUD_NAME;
  const dispatch = useDispatch();
  const linkId = convertPublicId(publicId);
  
  const handleDelete = () => {
    dispatch(removeImage(publicId))
    
  }
  
  return (
    <div className='image-box'>

      <Link to={`/detail/${linkId}`}>
        <Image
            key={index}
            cloudName={cloudinaryName}
            publicId={publicId}
            width='300'
            crop='scale' 
        />
      </Link>

          

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

        {forAdmin &&
          <>
            <Link 
              to={!forEvent 
                ? `/update/${linkId}` 
                : `/update/event/${linkId}`}>
              <button>Update</button>
            </Link>

            <button 
              onClick={handleDelete}
              className='delete-button'
              >Delete  
            </button>
          </>
        }
      </div>
  )
}

export default ImageItem
