import React from 'react';

import Heading from '../Headers/Heading';
import Video from '../Misc/Video';
import Art from '../Misc/Art';

import video from '../../assets/video.mp4';
import illustration from '../../assets/images/art_1.png';

function VideoSection() {
    return (
        <>
            <div className="video-section top-section position-relative">
                <div className="top-heading">
                    <div className="container">
                        <Heading 
                            heading={<h1>Your ideas realized for the real world.</h1>}
                            headingClass="heading-very-large dark-1"
                            paragraphClass="dark-2"
                            headingColumn="col-lg-9"
                        />
                    </div>
                </div>
                <div className="video-container">
                    <Video video={video} muted autoPlay playsInline="" preload="auto" />
                </div>
                <Art art={illustration} type={'1'} />
            </div>
        </>
    );
}

export default VideoSection;
