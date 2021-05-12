import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateImage } from '../../utils/api-utils';
import { selectImages } from '../../selectors/stateSelectors';
import { findByPublicId, reArrangeDate } from '../../utils/utils';
import './Upload.css';
import { Link, useHistory } from 'react-router-dom';
import Confirm from './Confirm';
import { addEvent, addImage } from '../../actions/imageActions';

type Props = {
  forEvent: boolean;
  publicIdForUpdate: string;
  page: string;
}

const Upload: React.FC<Props> = ({ forEvent, publicIdForUpdate, page }) => {
  const images = useSelector(selectImages);
  const imageForUpdate = findByPublicId(images, publicIdForUpdate);
  const metadata = imageForUpdate ? imageForUpdate.metadata : null;
  const history = useHistory();
  const dispatch = useDispatch();
  const [previewSource, setPreviewSource] = useState<any>();
  const [title, setTitle] = useState<string>('');
  const [medium, setMedium] = useState<string>('');
  const [dimensions, setDimensions] = useState<string>('');
  const [forSale, setForSale] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [showConfirm, setShowConfirm] = useState<boolean>(false); 
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
    window.scrollTo(0, 0);
    if(metadata) {
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
    if(page === 'add-image') dispatch(addImage(previewSource, newMetadata));
    if(page === 'add-event') dispatch(addEvent(previewSource, newMetadata));
    setPreviewSource('');
    setTitle('');
    setMedium('');
    setDimensions('');
    setForSale('');
    setPrice('');
    setDay('');
    history.push('/admin');
  }

  const handleUpdateSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setShowConfirm(true);
  }

  const handleUpdate = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    updateImage(publicIdForUpdate, newMetadata);
    history.push('/admin');
  }

  const handleUpdateState = () => {
    setShowConfirm(false);
  }

  return (
    <div className='upload-box' >
      <Link to='/admin' className='back-link'>{'<back'}</Link>

      {(page === 'update' || page === 'update-event') &&
        <h1 className='form-headline'>update</h1>
      }

      {(page === 'add-image') &&
        <h1 className='form-headline' >add an image</h1>
      }

      {(page === 'add-event') &&
        <h1 className='form-headline' >add an event</h1>
      }

      <form 
        onSubmit={(page === 'update' || page === 'update-event')
          ? handleUpdateSubmit
          : handleSubmit
        }  
        className='upload-form'>

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
              <option value=''>select one</option>
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

      {previewSource && 

        <img 
          src={previewSource} 
          alt="file chosen" 
          className='preview-pic'
        />

      }

      {showConfirm &&
        <>
          <Confirm
            task='update'
            handleStateChange={handleUpdateState}
            handleTask={handleUpdate}
          />
        </>
      }

    </div>
  )
}

export default Upload
