import React, { useEffect } from 'react';
import './ImageList.css';
import ImageItem from './ImageItem';
import { fetchImages } from '../../actions/imageActions';
import { useDispatch, useSelector } from 'react-redux';
import { selectImages } from '../../selectors/stateSelectors';


const ImageList: React.FC = () => {
  const images = useSelector(selectImages);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchImages())
  }, [dispatch]);

  const filteredEvents = images.filter(
    image => image.publicId.match(/event/g)
  )
  
  const eventItems = (filteredEvents) ? filteredEvents.map(
    (image, index) => (
      <li key={index}>
      <ImageItem image={image} index={index} forEvent/>
      </li>
    ))
    : null


  const filteredImages = images.filter(
    image => !image.publicId.match(/event/g)
  )

  const imageItems = (filteredImages) ? filteredImages.map(
    (image, index) => (
      <li key={index}>
      <ImageItem image={image} index={index} forEvent={false}/>
      </li>
    ))
      : null


  return (
  
    <div className='list-box'>

      {filteredEvents && 
      
      <ul>
        {eventItems}
      </ul>

      }
      {images &&

      <ul>
        {imageItems}
      </ul>

      }

    </div>
  )
}

export default ImageList
