// src/VideoBackground.js
import React from "react";
import "./VideoBackground.css";

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/clouds.mp4`} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
