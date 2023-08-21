import React from 'react';

function Heading(props) {
    const { WrapperComponent } = props;

    const headingColumn = props.headingColumn ? props.headingColumn : 'col-lg-6';
    const paragraphColumn = props.paragraphColumn ? props.paragraphColumn : 'col-lg-5 offset-lg-1';

    const component = (
        <div className="row">
            <div className={headingColumn}>
                <div className={`heading ${props.headingClass}`}>{props.heading}</div>
            </div>
            { props.paragraph && (
                <div className={paragraphColumn}>
                    <div className={`paragraph ${props.paragraphClass}`}>
                        <p>{props.paragraph}</p>
                    </div>
                </div>
            ) }
        </div>
    );

    if (WrapperComponent) {
        return <WrapperComponent children={component} />
    }

    return component;
}

export default Heading;
