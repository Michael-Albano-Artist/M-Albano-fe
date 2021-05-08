import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { uploadImage, uploadEvent, updateImage } from '../../utils/api-utils';
import { selectImages } from '../../selectors/stateSelectors';
import { findByPublicId, reArrangeDate } from '../../utils/utils';
import './Upload.css';
import { Link } from 'react-router-dom';

type Props = {
  forEvent: boolean;
  publicIdForUpdate: string;
  page: string;
}

const Upload: React.FC<Props> = ({ forEvent, publicIdForUpdate, page }) => {
  const images = useSelector(selectImages);
  const imageForUpdate = findByPublicId(images, publicIdForUpdate);
  const metadata = imageForUpdate ? imageForUpdate.metadata : null;
  const [previewSource, setPreviewSource] = useState<any>();
  const [title, setTitle] = useState<string>('');
  const [medium, setMedium] = useState<string>('');
  const [dimensions, setDimensions] = useState<string>('');
  const [forSale, setForSale] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const newMetadata = 
    `title=${title}
    |medium=${medium}
    |dimensions=${dimensions}
    |forSale=${forSale}
    |price=${price}
    |eventDay=${day}`;

    const previewFile = (file: Blob) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSource(reader.result ? reader.result : '');
       }

    }
    
    const date = reArrangeDate(new Date().toLocaleDateString("en-US"));

  useEffect(() => {
    if(metadata) {
      console.log(date)
    setTitle(metadata.title)
    setMedium(metadata.medium)
    setDimensions(metadata.dimensions)
    setForSale(metadata.forSale)
    setPrice(metadata.price)
    setDay(metadata.eventDay ? metadata.eventDay : date)
    }
  }, [metadata, date])
 

  const handleFileInput = (e: React.ChangeEvent<any>) => {
    const file = e.target.files[0];
    previewFile(file)
  }

  const handleChange = ({ target }) => {
    if(target.name === 'title') setTitle(target.value);
    if(target.name === 'medium') setMedium(target.value);
    if(target.name === 'dimensions') setDimensions(target.value);
    if(target.name === 'forSale') setForSale(target.value);
    if(target.name === 'price') setPrice(target.value);
    if(target.name === 'date') setDay(target.value);

  }

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if(page === 'update' || page === 'update-event') 
      updateImage(publicIdForUpdate, newMetadata);
    if(page === 'add-image') uploadImage(previewSource, newMetadata);
    if(page === 'add-event') uploadEvent(previewSource, newMetadata);
    setPreviewSource('');
  }

  return (
    <div className='upload-box' >
      <Link to='/admin' className='back-link'>{'<back'}</Link>
      <h1 className='form-headline' >
        {forEvent ? 'add an event' : 'add an image'}
      </h1>
      <form onSubmit={handleSubmit}  className='upload-form'>

        <label htmlFor="upload">choose a file</label>
        <input 
          type="file" 
          name="upload" 
          id="upload"
          value='' 
          onChange={handleFileInput} 
        />

        <label htmlFor='title'>title</label>
        <input
          type='text'
          name='title'
          id='title'
          value={title}
          onChange={handleChange}
        />

        <label htmlFor='medium'>
            {
            (!forEvent) 
              ? 'medium' 
              : 'description'
            }
        </label>
        <input
          type='text'
          name='medium'
          id='medium'
          value={medium}
          onChange={handleChange}
        />

        <label htmlFor='dimensions'>
          {
          (!forEvent) 
            ? 'dimensions' 
            : 'venue'
          }
        </label>
        <input
          type='text'
          name='dimensions'
          id='dimensions'
          value={dimensions}
          onChange={handleChange}
        />

        {forEvent &&

        <>
          <label htmlFor='date'>date</label>
          <input
            type='date'
            name='date'
            id='date'
            value={day}
            onChange={handleChange}
          />
        </>

        }

        {!forEvent &&

          <>
          <label htmlFor='forSale'>for sale?</label>
          <select 
            name='forSale'
            id='forSale'
            onChange={handleChange}
          >

              <option value='yes'>yes</option>
              <option value='no'>sold</option>
              <option value='not'>not for sale</option>

          </select>

          <label htmlFor='price'>price</label>
          <input
            type='text'
            name='price'
            id='price'
            value={price}
            onChange={handleChange}
          />
        </>
        }

        <button>Submit</button>

      </form>

      {previewSource && (

        <img 
          src={previewSource} 
          alt="file chosen" 
          className='preview-pic'
        />

      )}

    </div>
  )
}

export default Upload
