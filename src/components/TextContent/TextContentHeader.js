import React from 'react';

function TextContentHeader(props) {
    return (
        <>
            <div className="text-content-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <h2 className="heading heading-very-large light-1">{props.heading}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TextContentHeader;
