import React, { useState } from 'react';
import About from '../components/bio/About';


import ContactForm from '../components/contact/ContactForm';
import Music from '../components/music/Music';
import './PopUp.css';

interface Props {
  content: string;
}

const PopUp: React.FC<Props> = ({ content }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div>
      <nav>
        {content === 'contact' &&
          <div
            className='contact-link'
            onClick={() => setVisible(true)}
          >
            contact
          </div>
        }
        {content === 'bio' &&
          <div
            className='contact-link'
            onClick={() => setVisible(true)}
          >
            bio
          </div>
        }
        {content === 'music' &&
          <div
            className='contact-link'
            onClick={() => setVisible(true)}
          >
            music
          </div>
        }
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
              className={`x-box-${content}`}
              onClick={() => setVisible(false)}
            >
              X
            </div>
          </nav>

          {content === 'contact' &&
            <ContactForm />
          }
          {content === 'bio' &&
            <About />
          }
          {content === 'music' &&
            <Music />
          }
        </div>
      </div>
      
    </div>
  )
}

export default PopUp
