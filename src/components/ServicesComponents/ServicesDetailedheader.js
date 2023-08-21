import React from 'react';
import Heading from '../Headers/Heading';
import Art from '../Misc/Art';
import illustration from '../../assets/images/art_1.png';
import serviceImage from '../../assets/images/services-1.jpg';

function ServicesDetailedheader() {
    return (
        <>
            <div className="page-header position-relative">
                <Heading 
                        heading={<h1>Strategy</h1>}
                        headingClass="heading-very-large dark-1"
                        WrapperComponent={(props) => {
                            return (
                                <div className="page-header-top">
                                    <div className="container">
                                        {props.children}
                                    </div>
                                </div>
                            )
                        }}
                    />
                <div className="page-header-bottom">
                    <div className="single-image">
                        <img src={serviceImage} alt="about-header" />
                    </div>
                </div>
                <Art art={illustration} type="1" />
            </div>
        </>
    );
}

export default ServicesDetailedheader;
