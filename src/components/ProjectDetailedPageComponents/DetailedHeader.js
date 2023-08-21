import React from 'react';

function DetailedHeader(props) {
    return (
        <>
            <div className="project-single">
                <div className="project-single--header">
                    <div className="container">
                        <div className="heading heading-very-large dark-1">
                            <h1>{props.heading}</h1>
                        </div>
                    </div>
                    <div className="project-single-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="project-single-client">
                                        <h4 className="heading heading-small dark-2">Client</h4>
                                        <h3 className="heading heading-small dark-1">{props.client}</h3>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="project-single-service">
                                        <h4 className="heading heading-small dark-2">Services</h4>
                                        <h3 className="heading heading-small dark-1">{props.service}</h3>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="project-single-data">
                                        <h4 className="heading heading-small dark-2">Date</h4>
                                        <h3 className="heading heading-small dark-1">{props.date}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailedHeader;
