import React from 'react';

import ClientSection from '../components/ClientComponents/ClientSection';
import Testimonial from '../components/Testimonial/Testimonial';
import VideoSection from '../components/Sections/VideoSection';
import TextAboutSection from '../components/Misc/TextAboutSection';
import CallToAction from '../components/Misc/CallToAction';
import ProjectHeader from '../components/Headers/ProjectHeader';

import ProjectsSection from '../components/ProjectComponents/ProjectsSection';

const Home1 = () => {
    return (
        <>
            {/* Video section - start */}
            <VideoSection />
            {/* Video section - end */}
 
            {/* About section - start */}
            <TextAboutSection />
            {/* About section - end */}

            {/* Projects section - start */}
            <div className="projects">
                <div className="projects-wrapper">
                    <ProjectHeader
                        heading={'Recent work'}
                        paragraph={
                            'Our team helps companies develop their ideas into cutting-edge products that will cause customers to love and enjoy.'
                        }
                    />
                    <ProjectsSection />
                    <CallToAction 
                        wrapperClass='projects-footer bg-black'
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
                </div>
            </div>
            {/* Projects section - end */}

            {/* Testimonials section - start */}
            <Testimonial />
            {/* Testimonials section - end */}

            {/* Clients section - start */}
            <ClientSection />
            {/* Clients section - end */}
        </>
    );
};

export default Home1;
