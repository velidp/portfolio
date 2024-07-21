import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    let validationErrors = { name: false, email: false, message: false };

    if (!name) validationErrors.name = true;
    if (!email) validationErrors.email = true;
    if (!message) validationErrors.message = true;

    setErrors(validationErrors);

    if (!validationErrors.name && !validationErrors.email && !validationErrors.message) {
      setLoading(true);

      const contact = {
        _type: 'contact',
        name: name,
        email: email,
        message: message
      }

      client.create(contact).then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
    }
  }

  return (
    <>
      <h2 className='head-text head-text-contact'><span>Let's get in</span> touch</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.logo} alt="logo"/>
        </div>

        {!isFormSubmitted ? 
          <div className='app__footer-form app__flex'>
            <div className={`app__flex ${errors.name ? 'error' : ''}`}>
              <input 
                className='p-text' 
                type='text' 
                name='name' 
                placeholder='Your Name' 
                value={name} 
                onChange={handleChangeInput}
              />
            </div>
            <div className={`app__flex ${errors.email ? 'error' : ''}`}>
              <input 
                className='p-text' 
                type='text' 
                name='email' 
                placeholder='Your Email' 
                value={email} 
                onChange={handleChangeInput}
              />
            </div>
            <div className={`app__flex ${errors.message ? 'error' : ''}`}>
              <textarea
                className='p-text'
                placeholder='Your Message'
                value={message}
                name='message'
                onChange={handleChangeInput}
              />
            </div>
            <button type='button' className='p-text' onClick={handleSubmit}>
              {loading ? 'Sending' : 'Send Message'}
            </button>
          </div> 
          : 
          <div>
            <h3 className='head-text'><p className='thanks-text'>Thank you <span>for reaching out! I will answer you as soon as possible!</span> 😊</p></h3>
          </div>
        }
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'), 
  'contact',
  'app__whitebg'
);
