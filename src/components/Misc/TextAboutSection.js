import React from 'react';
import TextList from './TextList';
import Heading from '../Headers/Heading';
import { Link } from 'react-router-dom';

const list = [
    {
        title: 'Strategy',
        link: '/ServicesDetailed',
    },
    {
        title: 'Brand Identities',
        link: '/ServicesDetailed',
    },
    {
        title: 'Print Design',
        link: '/ServicesDetailed',
    },
    {
        title: 'UI/UX Design',
        link: '/ServicesDetailed',
    },
    {
        title: 'Art Direction',
        link: '/ServicesDetailed',
    },
    {
        title: 'Back End',
        link: '/ServicesDetailed',
    },
    {
        title: 'Admin System',
        link: '/ServicesDetailed',
    },
    {
        title: 'Front End',
        link: '/ServicesDetailed',
    },
];

function TextAboutSection() {
    return (
        <div className="text-about-section">
            <div className="text-about-section-wrapper">
                <div className="container">
                    <Heading 
                            heading={<h1>We're chilled and a laidback agency</h1>}
                            headingClass="heading-very-large dark-1"
                            paragraphClass="dark-2"
                            headingColumn="col-lg-9"
                    />
                    <div className="content-wrapper">
                        <div className="row">
                            {/* list - start */}
                            <div className="col-lg-4 col-md-6">
                                <TextList heading={'SKILLS'} list={list} />
                            </div>
                            {/* list - end */}

                            {/* text - start */}
                            <div className="col-lg-6 col-md-6 content-second-column">
                                <h4 className="content-heading heading heading-small light-2">HISTORY</h4>
                                <div className="paragraph dark-1">
                                    <p>
                                        We help transform your ideas into real world applications that will outperform
                                        your toughest competition and help you achieve your strategic goals in short
                                        period of time.
                                    </p>
                                    <p
                                        style={{
                                            height: 'auto',
                                        }}
                                    >
                                        &nbsp;
                                    </p>
                                    <p>
                                        We have been creating award-winning brands, websites, digital products, mobile
                                        apps and custom software since 2009.
                                    </p>
                                </div>
                                <Link className="button" to="/About">
                                    Learn More
                                </Link>
                            </div>
                            {/* text - end */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextAboutSection;
