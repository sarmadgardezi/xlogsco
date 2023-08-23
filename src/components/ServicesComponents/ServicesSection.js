import React from 'react';
import Heading from '../Headers/Heading';
import ServiceBox from './ServiceBox';
import { ServicesImageData } from '../../Data/ServicesData';

function ServicesSection() {
    return (
        <div className="services">
            <div className="services-wrapper">
                <Heading 
                    heading={<h1>We create valuable experiences pushing brands forward.</h1>}
                    headingClass="heading-very-large dark-1"
                    headingColumn="col-lg-9"
                    WrapperComponent={(props) => {
                        return (
                            <div className="services-header-wrapper">
                                <div className="container">
                                    {props.children}
                                </div>
                            </div>
                        )
                    }}
                />
                <div className="service-section service-image">
                    {ServicesImageData.map((item, index) => (
                        <ServiceBox
                            key={index}
                            index={item.index}
                            image={item.image}
                            icon={item.icon}
                            heading={item.heading}
                            paragraph={item.paragraph}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;
