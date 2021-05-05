import React, { useState } from 'react';
import ContactForm from './ContactForm';
import './Contact.css';

const PopUp: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div>
      <nav>
        <div
          className='contact-link'
          onClick={() => setVisible(true)}
        >
          contact
        </div>
      </nav>
      <div 
        className={visible 
          ? 'modal-visible' 
          : 'modal-invisible'}
        >
        <div
          className={visible
            ? 'modal-inner'
            : 'modal-invisible'}> 
          <nav>
            <div
              className='x-box'
              onClick={() => setVisible(false)}
            >
              X
            </div>
          </nav>
          <ContactForm />
        </div>
      </div>
      
    </div>
  )
}

export default PopUp
