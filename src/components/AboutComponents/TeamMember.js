import React from 'react';
import { useEffect } from 'react';

import $ from 'jquery';
import { team_member_anim } from '../../utils';
import { Link } from 'react-router-dom';

function TeamMember(props) {
    useEffect(() => {
        $(document).on('mouseenter', '.team-member', team_member_anim);

        return () => {
            $(document).off('mouseenter', '.team-member', team_member_anim);
        };
    }, []);

    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="team-member">
                    <div className="team-member-image">
                        <img width="370" height="455" src={props.image.src} alt={props.image.alt} />
                        <div className="team-member-social">
                            <ul>
                            {props.social.map((social, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={social.link}>
                                            <i aria-hidden="true" className={`fab ${social.icon}`}></i>
                                        </Link>
                                    </li>
                                );
                            })}
                            </ul>
                        </div>
                    </div>
                    <div className="team-member-content">
                        <h5>{props.name}</h5>
                        <h6>{props.designation}</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeamMember;
