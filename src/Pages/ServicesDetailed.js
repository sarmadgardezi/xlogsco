import React from 'react';
import AboutText from '../components/AboutComponents/AboutText';
import TextContentHeader from '../components/TextContent/TextContentHeader';
import ServicesDetailedheader from '../components/ServicesComponents/ServicesDetailedheader';
import CallToAction from '../components/Misc/CallToAction';
import blogimage from '../assets/images/blog_content_img.jpg';
import ImageSection from '../components/Sections/ImageSection';
import Art from '../components/Misc/Art';
import TabsSection from '../components/Sections/TabsSection';
import illustration from '../assets/images/art_2.png';
import { imageSectionData } from '../Data/ImageSectionData';

import logo from '../assets/images/logo.png';

function ServicesDetailed() {
    return (
        <>
            <ServicesDetailedheader />
            <AboutText image={logo} content="To deliver our expertise flexibly and with maximum impact, we have developed
                                    three different ways of working. Each is adaptable to your core needs, processes
                                    and culture of your business." />

            {imageSectionData.map((imageSection, index) => {
                return (
                    <ImageSection
                        heading={imageSection.heading}
                        content={imageSection.content}
                        image={imageSection.image}
                        title={imageSection.title}
                        iconNum={imageSection.iconNum}
                        reverse={(index + 1) % 2 === 0}
                        icon={imageSection.icon}
                        key={index}
                    />
                );
            })}

            <div className="text-content">
                <div className="text-content-wrapper position-relative bg-black">
                    <TextContentHeader heading="Next level free strategy sessions." />

                    <div className="text-content-inner">
                        <TabsSection dark="true" />
                    </div>
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
            </div>

            <div className="single-image ">
                <img src={blogimage} alt="generic" />
            </div>
        </>
    );
}

export default ServicesDetailed;
