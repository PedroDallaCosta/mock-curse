import React from 'react';
import ReactPlayer from 'react-player'

export default function VideoPlayer({ video }) {
  return (
    <div className="w-full h-full relative mt-5 shadow-2xl shadow-purple-900/40 ">
      <ReactPlayer
        url={video}
        className="react-player "
        playing={true}
        width="100%"
        height="100%"
        controls={false}
        config={{
          youtube: {
            color: 'white',
            controls: false,
            autoplay: true,
            disablekb: true,
          },
        }}
      />
    </div>
  );
}