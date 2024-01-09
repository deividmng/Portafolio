import React, { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from 'emailjs-com';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    // Limpiar el temporizador cuando el componente se desmonta o cuando la clase ya se ha cambiado
    return () => clearTimeout(timeoutId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uvav23f', 
      'template_4skhc6p', 
      form.current,
       '-dZSWm_Yce4epCcv3')
      .then(
        () => {
            alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
            alert('Failed to send the message, please try again')
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1 className='h1-contact'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1 >
          <p className='contact-info'>
            I am interested in freelance opportunities - especially on ambitious or large projects. However, if you have
            any other requests or questions, don't hesitate to contact me using the form beloww.
          </p>

          <p className='mq-smal'>
          Seeking freelance opportunities, particularly in ambitious or large-scale projects.
    
           For other inquiries, feel free to reach out using the form below
          </p>

           <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail} >
                            <ul>
                            <li className="half">
                               <input placeholder="Name" type="text" name="name" required />
                              </li>
                              <li className="half">
                           <input
                                placeholder="Email"
                               type="email"
                                name="email"
                               required
                              />
                             </li>
                             <li>
                             <input
                               placeholder="Subject"
                               type="text"
                               name="subject"
                               required
                           />
                            </li>
                            <li>
                            <textarea
                              placeholder="Message"
                            name="message"
                           required
                          ></textarea>
                         </li>
                          <li>
                           <input type="submit" className="flat-button" value="Send" />
                          </li>
                         </ul>

                        </form>
                    </div> 
          
        </div>
      </div>

      <Loader type='pacman' />
    </>
  );
};

export default Contact;
