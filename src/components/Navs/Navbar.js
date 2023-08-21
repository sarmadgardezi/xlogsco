import React, { useEffect, useRef } from 'react';
import logo from '../../assets/images/logo.png';
import navigationmenuimage from '../../assets/images/navigation_menu_image.png';
import { NavLink } from 'react-router-dom';
import NavSocials from './NavSocials';
import $ from 'jquery';
import { navItems } from '../../Data/NavItems';

import {
    nav_menu_scroll,
    nav_menu_width,
    dropdown_handler,
    nav_tl_driver,
    nav_scroll_disable,
} from '../../utils';

function Navbar() {
    //variables

    //functions calls in useEffect

    useEffect(() => {
        // Add an event listener to call the nav_stick_scroll function on scroll
        $(window).on('scroll', nav_scroll_disable);

        return () => {
            // Cleanup: remove the event listener when the component unmounts
            $(window).off('scroll', nav_scroll_disable);
        };
    }, []);

    useEffect(() => {
        let offset = 0;
        if ($('.navigation:not(.shown):not(.scrolled)').length > 0) {
            offset = $('.navigation:not(.shown):not(.scrolled)').offset().top;
        }
        $('.placeholder').css({
            width: '10vw',
            height: $('.navigation:not(.shown):not(.scrolled)').height(),
            top: offset,
        });
    }, []);

    useEffect(() => {
        nav_tl_driver();

        // // add event listener to handle window resize
        // window.addEventListener('resize', nav_tl_driver);

        // return () => {
        //     // remove event listener on unmount
        //     window.removeEventListener('resize', nav_tl_driver);
        // };
    }, []);

    useEffect(() => dropdown_handler(), []);

    useEffect(() => {
        $(document).ready(() => {
            // dropdown_handler();
            nav_menu_width();
        });

        $(window).resize(() => {
            nav_menu_width();
        });
    }, []);

    useEffect(() => {
        // Run this code when the component is mounted
        $(document).ready(() => {
            nav_menu_scroll();
        });

        // Run this code when the window is resized
        $(window).on('resize', nav_menu_scroll);

        // Remove the event listener when the component is unmounted
        return () => {
            $(window).off('resize', nav_menu_scroll);
        };
    }, []);

    useEffect(() => {
        nav_scroll_disable();
    }, []);

    useEffect(() => {
        const heightHandler = () => {
            // update opened navigation height on resize
            // it is implemented this way because 100vh works differently on phones
            // and bottom part of the menu is hidden, so this is a fix
            let nav = $('.navigation .navigation-menu');
            nav.css('height', window.innerHeight);
        }

        $('.navigation').on('navigationOpened', heightHandler);

        $('.navigation').on('dropdown-clicked', () => {
            // handle the scroll for the menu links if they overflow
            setTimeout(nav_menu_scroll, 400);
        });

        $(window).on('resize', heightHandler);

        // $('body').on('overlayScrollbar', () => {
        //     // determine the scroll width of the window
        //     scrollWidth();
        // });

        return () => {
            $('.navigation').off('navigationOpened', heightHandler);
            $(window).off('resize', heightHandler);
        }
    }, []);

    //closing navbar

    const buttonRef = useRef(null);

    return (
        <>
            <div class="placeholder"></div>
            <div className="navigation-wrapper" style={{ width: '100%' }}>
                <nav className="navigation enabled-sticky">
                    <div className="navigation-bar">
                        <div className="logo">
                            <NavLink className="navLink" to="/" rel="home" aria-current="page">
                                <img
                                    width="75px"
                                    height="75px"
                                    src={logo}
                                    className="custom-logo custom-logo-link"
                                    alt="Slope"
                                />
                            </NavLink>
                        </div>
                        <div className="hamburger" ref={buttonRef}>
                            <a href="/#">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </a>
                        </div>
                    </div>
                    <div className="navigation-menu">
                        <div className="navigation-menu-image">
                            <img width="683" height="1037" src={navigationmenuimage} alt="navigation" />
                        </div>
                        <div className="navigation-menu-menu">
                            <div className="navigation-menu-menu--wrapper">
                                <ul className="menu">
                                    {navItems.map((navItem, index) => (
                                        <li key={index} className="menu-item menu-item-has-children">
                                            <a href={navItem.link}>{navItem.label}</a>
                                            {navItem.subMenu && (
                                                <ul className="sub-menu">
                                                    {navItem.subMenu.map((subnavItem, subIndex) => (
                                                        <li key={subIndex} className="menu-item">
                                                            <NavLink className="navLink" to={subnavItem.link}>
                                                                {subnavItem.label}
                                                            </NavLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <NavSocials />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
