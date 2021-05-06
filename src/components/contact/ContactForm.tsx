import React, { useState } from 'react';
import { sendMessage } from '../../utils/api-utils';
import './Contact.css';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const flag = 'This message was sent via michaelalbano.art';
  const email = process.env.REACT_APP_EMAIL_HANDLER;

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'email') setSenderEmail(target.value);
    if(target.name === 'message') setMessage(target.value);
  }

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    sendMessage({
      name,
      email,
      senderEmail,
      message,
      flag
    });
    console.log({name,
      email,
      senderEmail,
      message,
      flag})
  }

  return (
    <div className='contact-form-outer'>
      <form 
        className='contact-form'
        onSubmit={handleSubmit}
      >
        <label htmlFor='name'>name</label>
        <input 
          type='text'
          id='name'
          name='name'
          placeholder='required field'
          value={name}
          onChange={handleChange}
        />
        <label htmlFor='email'>email</label>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='required field'
          value={senderEmail}
          onChange={handleChange}
        />
        <label htmlFor='message'>message</label>
        <input 
          type='textarea'
          id='message'
          name='message'
          placeholder='required field'
          value={message}
          onChange={handleChange}
          className='textarea'
        />
        <button>submit</button>
      </form>
    </div>
  )
}

export default ContactForm
