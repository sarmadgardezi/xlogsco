import React from 'react';
import { socialMediaData } from '../../Data/SocialMediaData';
function NavSocials() {
    return (
        <div>
            <div className="navigation-menu-social">
                <h6>FOLLOW</h6>
                <ul>
                    {socialMediaData.map((socialMedia, index) => (
                        <li key={index}>
                            <a href={socialMedia.href}>
                                <i className={socialMedia.icon}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NavSocials;
