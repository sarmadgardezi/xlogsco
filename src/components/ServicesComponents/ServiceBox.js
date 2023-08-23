import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { service_no_image_anim, service_image_anim } from '../../utils';

function ServiceBox(props) {
    const element = useRef(null);

    const animationHandler = (e) => {
        if (props.image) {
            service_image_anim(e);
        } else {
            service_no_image_anim(e);
        }
    }

    useEffect(() => {
        const box = element.current;
        box.addEventListener('mouseenter', animationHandler);

        return () => {
            box.removeEventListener('mouseenter', animationHandler);
        };
    }, []); // eslint-disable-line

    if (props.image) {
        return (
            <div className={`service--box`} ref={element}>
                <div className="service--box--image">
                    <Link to="/ServicesDetailed">
                        <img src={props.image.src} alt={props.image.alt} />
                        <div className="icon">{props.icon}</div>
                    </Link>
                </div>

                <a href="service-detailed.html">
                    <div className="service--box--content">
                        <h4>{props.heading}</h4>
                        <p>{props.paragraph}</p>
                    </div>
                </a>
            </div>
        );
    } else {
        return (
            <div className={`service--box-icon`} ref={element}>
                <Link to="/ServicesDetailed">
                    <div className="icon">{props.icon}</div>
                    <div className="text">
                        <h4>{props.title}</h4>
                    </div>
                </Link>
            </div>
        );
    }
}

export default ServiceBox;
