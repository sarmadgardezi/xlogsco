import React, { useEffect } from 'react';
import $ from 'jquery';
import { p_nbsp } from '../../utils';
import logo from '../../assets/images/logo.png';

function Preloader() {
    useEffect(() => {
        $(window).on('load', function () {
            // add loaded class to body so that preloader can disappear
            $('body').addClass('loaded');

            // if ($('.comment-form--wrapper').length < 1 && $('.related-posts').length > 0) {
            //     $('.related-posts').css('margin-top', '15rem');
            // }

            if ($('.related-posts').length > 0) {
                $('.default-footer').css('margin-top', 0);
            }

            $('.navigation').on('navigationOpened', () => {
                if ($('.navigation .logo > *').length > 0) {
                    $('.navigation .hamburger').addClass('align');
                }
            });

            $('.blog-single-content-wrapper > p').each((index, element) => {
                let fontSize = parseInt($(element).css('font-size').replace('px', ''));
                let lineHeight = parseInt($(element).css('line-height').replace('px', ''));

                if (isNaN(lineHeight) || isNaN(fontSize) || fontSize === lineHeight) return;

                if (fontSize > lineHeight) {
                    $(element).css('line-height', fontSize + 14 + 'px');
                }
            });
        });

        $(window).on('load', p_nbsp);
        $(window).on('resize', p_nbsp);
    }, []);
    return (
        <div className="preloader">
            <div id="pulse-wrapper">
                <div id="pulse">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <img src={logo} alt="slope-logo" />
        </div>
    );
}

export default Preloader;
