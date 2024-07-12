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
      playlist: "HIvqw74pCFc",
      controls: 0
    },
  };

  return (
    <div className="video-background">
      <div className="video">
        <div className="video-container">
          <YouTube videoId={"HIvqw74pCFc"} opts={opts} className="video-iframe" />
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
