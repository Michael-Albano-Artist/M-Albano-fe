import React, { useState } from 'react';
import './Contact.css';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'email') setEmail(target.value);
    if(name === 'message') setMessage(target.value);
  }

  return (
    <div className='contact-form-outer'>
      <form 
        className='contact-form'
        onSubmit={() => {}}
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
          value={email}
          onChange={handleChange}
        />
        <label htmlFor='message'>message</label>
        <input 
          type='textarea'
          id='message'
          name='messsage'
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
