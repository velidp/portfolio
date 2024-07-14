import React from 'react';
import { Header } from '../container';
import './VideoBackground.scss'; 

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
      <source src="/video_background.mp4" type="video/mp4" />

        {/* Add additional <source> elements for different video formats */}
        Your browser does not support the video tag.
      </video>
      {/* Add content on top of the video background */}
      <div >
        <Header/>
      </div>
    </div>
  );
}

export default VideoBackground;
