import React from 'react';

const YouTubeEmbed = ({ videoId }) => (
  <div style={{ position: 'relative', paddingBottom: '35%', height: 0, overflow: 'hidden', maxWidth: '560px', maxHeight: '315px' }}>
    <iframe
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
      src={`https://www.youtube.com/embed/${videoId}`}
      allowFullScreen
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </div>
);

const YouTubePlaylistEmbed = ({ playlistId }) => (
  <div style={{ position: 'relative', paddingBottom: '35%', height: 0, overflow: 'hidden', maxWidth: '560px', maxHeight: '315px' }}>
    <iframe
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
      src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
      allowfullscreen
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </div>
);

export {YouTubeEmbed, YouTubePlaylistEmbed};
