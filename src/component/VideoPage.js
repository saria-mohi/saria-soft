import React from 'react';

const VideoPage = () => {
  return (
    <div>
      <h1>Video Page</h1>
      <div className="video-container">
        <video width="500" controls>
          <source src="../Assets/v1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPage;
