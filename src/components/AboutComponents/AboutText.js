import React from 'react';

function AboutText(props) {
    return (
        <div className="about-text-section">
            <div className="about-text-section-wrapper bg-black text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="about-text-section-inner">
                                <img src={props.image} alt="about-logo" />
                                <h2 className="heading heading-large light-1">
                                    {props.content}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutText;
