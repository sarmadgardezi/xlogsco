import React from 'react';
import Services1Header from '../components/ServicesComponents/Services1Header';
import CallToAction from '../components/Misc/CallToAction';
import ServicesSection from '../components/ServicesComponents/ServicesSection';
import TextContent from '../components/TextContent/TextContent';
import Heading from '../components/Headers/Heading';
import TabsSection from '../components/Sections/TabsSection';

import Art from '../components/Misc/Art';
import art from '../assets/images/art_3.png';

function ServiceStyle2() {
    return (
        <>
            <Services1Header />
            <ServicesSection />

            <TextContent />

            <div className="tab-section">
                <div className="tab-section-wrapper">
                    <div className="container">
                        <Heading 
                            heading={<h2>Impactful approach to problem solving</h2>}
                            headingClass="heading-very-large dark-1"
                            headingColumn="col-lg-9"
                        />
                        <TabsSection />
                    </div>
                </div>
            </div>
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

export default ServiceStyle2;
