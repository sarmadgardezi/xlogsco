import React from 'react';
import Button from './Button';

const CalltoAction = (props) => {
    return (
        <div className="cta">
            <div className={`cta-wrapper position-relative ${props.wrapperClass}`}>
                <div className="container">
                    <div className="row align-items-lg-center">
                        <div className="col-md-6">
                            <h3 className={`heading heading-large ${props.headingClass}`}>
                                {props.heading}
                            </h3>
                        </div>
                        <div className="col-md-6 d-md-inline-flex justify-content-md-end">
                            <div className="button-wrapper">
                                <Button content={props.buttonText} link={props.buttonLink} type={props.buttonType} />
                            </div>
                        </div>
                    </div>
                </div>
                {props.artwork}
            </div>
        </div>
    );
}

export default CalltoAction;
