import React, { useEffect } from 'react';

const StravaEmbed = ({ embedId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://strava-embeds.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [embedId]);

  return <div className="strava-embed-placeholder" data-embed-type="activity" data-embed-id={embedId}></div>;
};

export default StravaEmbed;
