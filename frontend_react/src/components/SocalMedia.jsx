import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocalMedia = () => {
  return (
    <div className='app__social'>

    
        <a href='https://www.linkedin.com/in/adel-zonic/' target='_blank'>
            <div>
                <BsLinkedin/>
            </div>
        </a>

        <a href='https://www.facebook.com/adel.zonic/' target='_blank'>
            <div>
                <FaFacebook/>
            </div>
        </a>
    </div>
  )
}

export default SocalMedia;