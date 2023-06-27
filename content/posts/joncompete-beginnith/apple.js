import React from 'react';

const PodcastEmbed = ({ podcastId }) => (
    <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        frameborder="0"
        height="450"
        style={{
            width: "100%",
            maxWidth: "660px",
            overflow: "hidden",
            borderRadius: "10px"
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src={`https://embed.podcasts.apple.com/us/podcast/${podcastId}`}
    ></iframe>
);

export {PodcastEmbed};
