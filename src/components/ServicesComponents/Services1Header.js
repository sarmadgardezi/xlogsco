import React from 'react';
import aboutheader from '../../assets/images/about-header.jpg';
import Heading from '../Headers/Heading';
import Art from '../Misc/Art';
import illustration from '../../assets/images/art_1.png';

function Services1Header() {
    return (
        <>
            <div className="page-header position-relative">
                <Heading 
                    heading={<h1>Capabilities</h1>}
                    headingClass="heading-very-large dark-1"
                    paragraph="Our team helps companies develop their ideas into cutting-edge products that will cause customers to love and enjoy."
                    paragraphClass="dark-2"
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
                        <img src={aboutheader} alt="about-header" />
                    </div>
                </div>
                <Art art={illustration} type="1" />
            </div>
        </>
    );
}

export default Services1Header;
