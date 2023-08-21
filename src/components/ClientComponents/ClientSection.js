import React from 'react';
import ClientSlider from './ClientSlider';
import Heading from '../Headers/Heading';
import clients from '../../Data/clients';

function ClientSection() {
    return (
        <div className="client-section">
            <div className="client-section-wrapper">
                <div className="container">
                    <div className="client-section-header">
                        <Heading 
                            heading={<h3>Our clients</h3>}
                            headingClass="heading-large dark-1"
                            paragraphClass="dark-2"
                            paragraph="We’ve built strong relationships with our clients. Become our new client and expect nothing less than industry’s best."
                        />
                    </div>
                    <ClientSlider slides={clients} />
                    <div className="d-none client-slider-1 d-lg-block">
                        <ClientSlider slides={clients} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientSection;
