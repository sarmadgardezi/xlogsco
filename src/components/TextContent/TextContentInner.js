import React from 'react';

function TextContentInner(props) {
    return (
        <>
            <div className="text-content-inner">
                <div className="container">
                    <div className="row">
                        {props.content.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className={`col-lg-6 ${index === 1 ? 'second-column' : ''}`}>
                                    <h4 className="heading heading-small light-2">{item.heading}</h4>
                                    <div className="paragraph light-1">
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TextContentInner;
