import React from 'react';
import { Header } from '../container';
import './VideoBackground.scss'; 
import YouTube from 'react-youtube';

const VideoBackground = () => {

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: "np7CvKfxjE4",
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
