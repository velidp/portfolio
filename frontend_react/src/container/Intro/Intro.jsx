import React, { useState, useEffect } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Intro.scss';

const Intro = () => {
    const [intro, setIntro] = useState([]);

    useEffect(() => {
        const query = '*[_type == "intro"]';
        client.fetch(query)
            .then((data) => setIntro(data))
    }, []);

    const handleDownloadCV = async () => {
      if (intro.length === 1 && intro[0]?.cv?.asset?._ref) {
          try {
              const cvAsset = await client.getDocument(intro[0].cv.asset._ref);
              const cvUrl = `${cvAsset.url}?dl`;
              const downloadLink = document.createElement('a');
              downloadLink.href = cvUrl;
              downloadLink.setAttribute('download', true);
              downloadLink.setAttribute('target', '_self'); 
              document.body.appendChild(downloadLink);
              downloadLink.click();
              document.body.removeChild(downloadLink);
          } catch (error) {
              console.error('Error fetching CV:', error);
          }
      }
    };
  

    return (
        <div className='app__bio-container'>
            <h2 className='head-text'><span>About</span> Me</h2>
            {intro.length === 1 && (
                <div className='app__bio-content'>
                    <div className='app__bio-image'>
                        <img src={urlFor(intro[0].imageurl)} alt="VP" />
                    </div>
                    <div className='app__bio-text'>
                        <p>{intro[0]?.bio}</p>
                    </div>
                </div>
            )}
            <div className='button'>
                <button type='button' className='button-text' onClick={handleDownloadCV}>Download CV</button>
            </div>
        </div>
    );
};

export default AppWrap(
    MotionWrap(Intro, 'app__intro'),
    'about',
    'app__primarybg'
);
