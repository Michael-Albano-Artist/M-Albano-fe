import React, { useEffect, useState } from 'react';
import { fetchImages } from '../../api-utils';
// import { Image } from 'cloudinary-react';
import { GalleryItem } from '../../types';
import './ImageList.css';
import ImageItem from './ImageItem';

type Props = {
  forEvents: boolean;
}


const ImageList: React.FC<Props> = ({ forEvents }) => {
  const [images, setImages] = useState<GalleryItem[]>([]);
  // const [events, setEvents] = useState<GalleryItem[]>([]);
  
  useEffect(() => {
    fetchImages()
      .then(images => setImages(images));
    // fetchEvents()
    //   .then(res => setEvents(res));
  }, []);

  const filteredEvents = images.filter(image => 
    image.publicId.match(/event/g)
  )
  
  const eventItems = (filteredEvents) ? filteredEvents.map(
    (image, index) => (
      <li key={index}>
      <ImageItem image={image} index={index} />
      </li>
    ))
    : null


const filteredImages = images.filter(
  image => !image.publicId.match(/event/g))

  const imageItems = (filteredImages) ? filteredImages.map(
    (image, index) => (
      <li key={index}>
      <ImageItem image={image} index={index} />
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
