import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocalMedia = () => {
  return (
    <div className='app__social'>

        <a href='https://github.com/velidp' target='_blank'>
            <div>
                <BsGithub/>
            </div>
        </a>


        <a href='https://www.linkedin.com/in/velid-posko/' target='_blank'>
            <div>
                <BsLinkedin/>
            </div>
        </a>


        <a href='https://www.instagram.com/velid.p/' target='_blank'>
            <div>
                <BsInstagram/>
            </div>
        </a>


        <a href='https://www.facebook.com/velid.posko/' target='_blank'>
            <div>
                <FaFacebook/>
            </div>
        </a>
    </div>
  )
}

export default SocalMedia;