import React from 'react';

import Testimonial from '../components/Testimonial/Testimonial';
import ServicesSection from '../components/ServicesComponents/ServicesSection';
import ClientSection from '../components/ClientComponents/ClientSection';
import TextContent from '../components/TextContent/TextContent';
import CallToAction from '../components/Misc/CallToAction';
import ImageSlider from '../components/Misc/ImageSlider';
import Heading from '../components/Headers/Heading';

import ProjectsContent from '../components/ProjectComponents/ProjectsContent';
import Art from '../components/Misc/Art';

import homeHeroImage from '../assets/images/index-2-header-img-1.jpg';
import art from '../assets/images/art_3.png';

function Home2() {

    return (
        <>
            <div className="index-2-header position-relative">
                <div className="top-heading">
                    <div className="container">
                        <Heading 
                            heading={<h1>Your ideas realized for the real world.</h1>}
                            headingClass="heading-very-large dark-1"
                            headingColumn="col-lg-9"
                        />
                    </div>
                </div>
                <ImageSlider
                    images={[
                        {
                            image: homeHeroImage,
                            alt: 'Hero Image',
                        },
                        {
                            image: homeHeroImage,
                            alt: 'Hero Image',
                        },
                    ]}
                />
            </div>
            <ServicesSection />
            <TextContent />
            <div className="projects">
                <Heading 
                    heading={<h2>Check some of our recent works.</h2>}
                    headingClass="heading-very-large dark-1"
                    headingColumn="col-lg-9"
                    WrapperComponent={(props) => {
                        return (
                            <div className="projects-header-1">
                                <div className="container">
                                    {props.children}
                                </div>
                            </div>
                        )
                    }}
                />
                <ProjectsContent />
            </div>
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
            <Testimonial />
            <ClientSection />
            <CallToAction 
                wrapperClass='bg-main'
                heading={
                    <>
                        Have an idea?
                        <br />
                        Let’s get it done right!
                    </>
                }
                buttonText="Let's Work Together"
                buttonLink="/Contact"
                buttonType="2"
                artwork={<Art art={art} type={'4'} />}
            />
        </>
    );
}

export default Home2;
