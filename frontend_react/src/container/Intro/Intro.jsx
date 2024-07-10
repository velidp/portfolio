import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Intro.scss';

const Intro = () => {
  return (
    <>
      <div className='app__bio-container'>
        <h2 className='head-text'>About <span>Me</span></h2>
        <div className='app__bio-content'>
          <div className='app__bio-image'>
            <img src={"https://fastly.picsum.photos/id/526/200/300.jpg?hmac=Xtm9XW9i9d69kjGxmnZYyvJRyY3VKqYwjw_Yq9Z1YBU"} alt="Your Name" />
          </div>
          <div className='app__bio-text'>
            <p>I'm [Your Name], a software engineer with strong experience in the IT industry. I hold a Bachelor's degree in Electrical Engineering with a specialization in Computer Science and Informatics from [Your University]. My professional journey includes full-stack development, database management, and API development. I've worked on numerous high-impact projects and am skilled in Java, Python, and PostgreSQL. I'm passionate about technology and always eager to connect and collaborate on innovative projects.</p>
          </div>
        </div>
        <div className='button'>
          <button type='button' className='p-text' onClick={() => window.open('/path/to/your/cv.pdf', '_blank')}>Download CV</button>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
    MotionWrap(Intro, 'app__intro'), 
    'intro',
    'app__whitebg'
);