import React, { useState, useEffect } from "react";
import { Header } from "../container";
import "./VideoBackground.scss";
import YouTube from "react-youtube";
import { client } from "../../src/client";

const VideoBackground = () => {
  const [home, setHome] = useState([]);

  useEffect(() => {
    const query = '*[_type == "home"]';
    client.fetch(query).then((data) => setHome(data));
  }, []);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
    },
  };

  const onEnd = (event) => {
    event.target.seekTo(0);
  };

  return (
    <div className="video-background">
      <div className="video">
        <div className="video-container">
          {home[0]?.videoId && (
            <YouTube
              videoId={home[0].videoId}
              opts={opts}
              className="video-iframe"
              onEnd={onEnd} 
            />
          )}
        </div>
        <div className="overlay"></div>
        <div className="header-container">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
