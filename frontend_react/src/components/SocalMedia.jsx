import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocalMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsLinkedin/>
        </div>
        <div>
            <BsInstagram/>
        </div>
        <div>
            <FaFacebook/>
        </div>
        <div>
            <BsGithub/>
        </div>
    </div>
  )
}

export default SocalMedia;