import React from 'react';
import Services1Header from '../components/ServicesComponents/Services1Header';
import CallToAction from '../components/Misc/CallToAction';
import TextContent from '../components/TextContent/TextContent';
import Heading from '../components/Headers/Heading';
import TabsSection from '../components/Sections/TabsSection';
import { ServicesData } from '../Data/ServicesData';
import ServiceBox from '../components/ServicesComponents/ServiceBox';

import Art from '../components/Misc/Art';
import art from '../assets/images/art_3.png';

function ServicesStyle1() {
    return (
        <>
            <Services1Header />
            <div className="services-section">
                <div className="services-section-wrapper">
                    <div className="container">
                        <Heading 
                            heading={<h1>We create valuable experiences pushing brands forward.</h1>}
                            headingClass="heading-very-large dark-1"
                            headingColumn="col-lg-9"
                        />
                        <div className="row service-withoutimage">
                            {ServicesData.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="col-lg-4">
                                        <ServiceBox index={item.index} icon={item.icon} title={item.title} />
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
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

export default ServicesStyle1;
