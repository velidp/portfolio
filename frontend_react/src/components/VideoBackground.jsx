import React, { useState, useEffect } from 'react';
import { Header } from '../container';
import './VideoBackground.scss'; 
import YouTube from 'react-youtube';
import { client } from '../../src/client';

const VideoBackground = () => {

  const [home, setHome] = useState([]);

    useEffect(() => {
        const query = '*[_type == "home"]';
        client.fetch(query)
            .then((data) => setHome(data))
    }, []);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: home[0]?.videoId,
      controls: 0
    },
  };

  return (
    <div className="video-background">
      <div className="video">
        <div className="video-container">
          <YouTube videoId={"np7CvKfxjE4"} opts={opts} className="video-iframe" />
        </div>
        <div className="overlay"></div>
        <div className="header-container">
          <Header/>
        </div>
      </div>
    </div>
  );
}

export default VideoBackground;
