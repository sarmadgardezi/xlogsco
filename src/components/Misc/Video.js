import React, { useEffect, useRef } from 'react';

const Video = (props) => {
    const videoRef = useRef(null);
    const { video, ...attributes } = props;

    const handleVideoEnd = () => {
        const videoElement = videoRef.current;
        videoElement.pause();
        videoElement.currentTime = 0.44;
        videoElement.play();
    };

    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.addEventListener('ended', handleVideoEnd);

        return () => {
            videoElement.removeEventListener('ended', handleVideoEnd);
        };
    }, []);

    return (
        <video {...attributes} ref={videoRef}>
            <source src={video} type="video/mp4" />
        </video>
    );
};

export default Video;
