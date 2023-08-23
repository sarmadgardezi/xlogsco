import React from 'react';
import blogimage from '../../assets/images/blog_content_img.jpg';
import TextContentHeader from './TextContentHeader';
import CallToAction from '../Misc/CallToAction';
import TextContentInner from './TextContentInner';
import Art from '../Misc/Art';
import illustration from '../../assets/images/art_2.png';

import { TextContentData } from '../../Data/TextContent';

function TextContent() {
    return (
        <>
            <div className="text-content">
                <div className="text-content-wrapper position-relative bg-black">
                    <TextContentHeader heading="Next level free strategy sessions." />
                    <TextContentInner content={TextContentData} />
                    <CallToAction 
                        wrapperClass='text-content-footer bg-black pt-0 pb-0'
                        headingClass='light-1'
                        heading={
                            <>
                                Have an idea?
                                <br />
                                Let’s get it done right!
                            </>
                        }
                        buttonText="Let's Work Together"
                        buttonLink="/Contact"
                        buttonType="1"
                    />
                    <Art art={illustration} type="2" />
                </div>

                <div className="single-image ">
                    <img src={blogimage} alt="generic" />
                </div>
            </div>
        </>
    );
}

export default TextContent;
