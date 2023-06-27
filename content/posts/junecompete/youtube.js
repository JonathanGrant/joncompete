import React from 'react';

const YouTubeEmbed = ({ videoId }) => (
  <iframe
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${videoId}`}
    frameborder="0"
    allowfullscreen
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  ></iframe>
);

const YouTubePlaylistEmbed = ({ playlistId }) => (
  <iframe
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
    frameborder="0"
    allowfullscreen
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  ></iframe>
);

export {YouTubeEmbed, YouTubePlaylistEmbed};
