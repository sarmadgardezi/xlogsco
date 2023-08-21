import React from 'react';
import TeamMember from './TeamMember';
import { AboutTeamData } from '../../Data/AboutTeamData';
import Heading from '../Headers/Heading';

function TeamSection() {
    return (
        <>
            <div className="team">
                <div className="team-wrapper">
                    <Heading 
                        heading={<h6>Our team</h6>}
                        headingClass="heading-large dark-1"
                        paragraph="Our team helps companies develop their ideas into cutting-edge products that will cause customers to love and enjoy."
                        paragraphClass="dark-2"
                        WrapperComponent={(props) => {
                            return (
                                <div className="team-header">
                                    <div className="container">
                                        {props.children}
                                    </div>
                                </div>
                            )
                        }}
                    />
                    <div className="team-content">
                        <div className="container">
                            <div className="row">
                                {AboutTeamData.map((item, index) => (
                                    <TeamMember
                                        key={index}
                                        name={item.name}
                                        designation={item.designation}
                                        image={item.image}
                                        social={item.social}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeamSection;
