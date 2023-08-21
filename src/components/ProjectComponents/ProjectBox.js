import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { project_anim } from '../../utils';

function ProjectBox(props) {
    const box = useRef(null);

    useEffect(() => {
        if (props.type == null) return;
        if (props.type !== '2') return;
        const element = box.current;
        element.addEventListener('mouseenter', project_anim);

        return () => {
            element.removeEventListener('mouseenter', project_anim);
        }
    }, []); // eslint-disable-line

    return (
        <Link to="/ProjectDetailed" className="project-list-single--wrapper" ref={box}>
            <div className="project-list-single">
                <div className="project-list-single--content">
                    <div className="project-list-single--content-inner">
                        <div className="project-single-service project-single-service-1">
                            <h3>{props.heading}</h3>
                        </div>
                        <h2>{props.description}</h2>
                        <div className="project-single-service project-single-service-2 project-single-client">
                            <h3>
                                {props.name}
                                <span>—</span>
                                {props.namespan}
                            </h3>
                        </div>
                        <div className="project-single-button">
                            <div className="project-single-button--inner">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-list-single--thumbnail">
                    <img src={props.image} alt={props.alt} />
                </div>
            </div>
        </Link>
    );
}

export default ProjectBox;
