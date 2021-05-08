import React, { useState } from 'react';
import { sendMessage } from '../../utils/api-utils';
import './Contact.css';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messageSent, setMessageSent] = useState<boolean>(false);
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
    setName('');
    setSenderEmail('');
    setMessage('');
    setMessageSent(true);
  }

  return (
    <div className='contact-form-outer'>
      {!messageSent &&
        <h2 className='contact-message' 
          >to discuss sales and commissions, just send me a message.
        </h2>
      }
      {messageSent &&
      <div className='thanks-message'>
        <h1>Hey, Thanks!</h1>
        <h2>I'll get back to ya as soon as I can.</h2>
      </div>
      }
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
