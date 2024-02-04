import React from 'react';

const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
        {/* <video width="853" height="480" controls>
            <source src={`public/static/videos/osu.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
        </video> */}
      
    </div>
  );

export default YoutubeEmbed;