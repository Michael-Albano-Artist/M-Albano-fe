import React, { useState } from 'react'
import { GalleryItem } from '../../types'
import { Image } from 'cloudinary-react';
import './ImageItem.css';
import { arrangeDate, convertPublicId } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { removeImage } from '../../actions/imageActions';
import { useDispatch } from 'react-redux';
import Confirm from '../admin/Confirm';


type Props = {
  image: GalleryItem;
  index: number;
  forEvent: boolean;
  eventBig: boolean;
  forAdmin: boolean;
}

const ImageItem: React.FC<Props> = ({ 
  image, 
  index, 
  forEvent,
  eventBig,
  forAdmin 
}) => {
  const { publicId, metadata } = image;
  const cloudinaryName = process.env.REACT_APP_CLOUD_NAME;
  const dispatch = useDispatch();
  const linkId = convertPublicId(publicId);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  
  const handleDelete = () => {
    dispatch(removeImage(publicId))
    setShowConfirm(false)
  }

  const handleDeleteState = () => {
    setShowConfirm(false);
  }
  
  return (
    <div className='image-box'>

      <Link to={`/detail/${linkId}`}>
        <Image
            key={index}
            cloudName={cloudinaryName}
            publicId={publicId}
            width={eventBig ? 600 : 300}
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

        {showConfirm &&
          <Confirm 
            task='delete' 
            handleStateChange={handleDeleteState}
            handleTask={handleDelete}
          />
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
              onClick={() => setShowConfirm(true)}
              className='delete-button'
              >Delete  
            </button>
          </>
        }
      </div>
  )
}

export default ImageItem
