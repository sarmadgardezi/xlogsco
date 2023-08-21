import React from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../../Data/MenuItems';

function MiniNav() {
    return (
        <div>
            <div className="navigation-menu-menu">
                <div className="navigation-menu-menu--wrapper">
                    <ul id="menu-main-menu-1" className="menu">
                        {menuItems.map((item, index) => (
                            <li className="menu-item" key={index}>
                                <Link to={item.to}>
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MiniNav;
