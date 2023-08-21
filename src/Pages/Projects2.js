import React from 'react';
import Testimonial from '../components/Testimonial/Testimonial';
import LoadButton from '../components/Misc/LoadButton';
import CallToAction from '../components/Misc/CallToAction';
import ProjectsContent from '../components/ProjectComponents/ProjectsContent';
import Heading from '../components/Headers/Heading';

import Art from '../components/Misc/Art';
import art from '../assets/images/art_3.png';

function Projects2() {

    return (
        <>
            <Heading 
                heading={<h1>Projects</h1>}
                headingClass="heading-very-large dark-1"
                paragraph="Our team helps companies develop their ideas into cutting-edge products that will cause customers to love and enjoy."
                paragraphClass="dark-2"
                WrapperComponent={(props) => {
                    return (
                        <div className="page-header">
                            <div className="page-header-top">
                                <div className="container">
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    )
                }}
            />
            <div className="projects">
                <ProjectsContent />
            </div>
            <LoadButton />
            <Testimonial type="5" />
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

export default Projects2;
