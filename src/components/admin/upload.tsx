import React, { useState } from 'react';
import { uploadImage, uploadEvent } from '../../api-utils';
import './Upload.css';

type Props = {
  forEvent: boolean;
}

const Upload: React.FC<Props> = ({ forEvent }) => {
  const [previewSource, setPreviewSource] = useState<any>();
  const [title, setTitle] = useState<string>('');
  const [medium, setMedium] = useState<string>('');
  const [dimensions, setDimensions] = useState<string>('');
  const [forSale, setForSale] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [date, setDate] = useState();
  const metadata = 
    `title=${title}
    |medium=${medium}
    |dimensions=${dimensions}
    |forSale=${forSale}
    |price=${price}`;

  const previewFile = (file: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result ? reader.result : '');
    }

  }

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
    if(target.name === 'date') setDate(target.value);

  }

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if(!forEvent) uploadImage(previewSource, metadata);
    else uploadEvent(previewSource, metadata);
    console.log(metadata);
    setPreviewSource('');
  }

  return (
    <div className='upload-box' >
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
            (!forEvent) ? 'medium' 
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
          (!forEvent) ? 'dimensions' 
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
            value={date}
            onChange={handleChange}></input>
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
              <option value=''></option>
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

        <img src={previewSource} alt="file chosen"/>

      )}
      
    </div>
  )
}

export default Upload
