import $ from 'jquery';
import { gsap } from 'gsap';
import OverlayScrollbars from 'overlayscrollbars';
// import scroll_inst  from "./components/Navs/Navbar";
let navigation_overflow;
let navigationOverScroll = null;

const bodyEl = $('body').get(0);

export function hexa_to_rgba(h, alpha = null) {
    if (!h.includes('#')) {
        return h;
    }

    let r = 0,
        g = 0,
        b = 0,
        a = 1;

    if (h.length === 7) {
        r = '0x' + h[1] + h[2];
        g = '0x' + h[3] + h[4];
        b = '0x' + h[5] + h[6];
        a = '1';
    } else if (h.length === 9) {
        r = '0x' + h[1] + h[2];
        g = '0x' + h[3] + h[4];
        b = '0x' + h[5] + h[6];
        a = '0x' + h[7] + h[8];
        a = +(a / 255).toFixed(3);
    }

    if (alpha != null) {
        a = alpha;
    }

    return 'rgba(' + +r + ',' + +g + ',' + +b + ',' + a + ')';
}

//navbar functions
const nav_stick_scroll = (instance) => {
    let scrollPosition;

    scrollPosition = instance.scroll().position.y;

    let nav_el = $('.navigation.enabled-sticky');
    let is_scrolled = nav_el.hasClass('scrolled');
    let is_shown = nav_el.hasClass('shown');
    let height = nav_el.height();

    if (scrollPosition > height && !is_scrolled && !is_shown) {
        nav_el.addClass('scrolled');
        $('.placeholder').css('position', 'relative');
        // $('.navigation').removeClass('mid');
        $('.navigation .navigation-menu').css({
            'margin-top': 0,
        });
    } else if (scrollPosition <= height && scrollPosition > 0 && !is_shown) {
        nav_el.removeClass('scrolled');
        $('.placeholder').css('position', 'absolute');
    } else if (scrollPosition <= height && scrollPosition === 0 && !is_shown) {
        $('.navigation.enabled-sticky').removeClass('scrolled');
        $('.placeholder').css('position', 'absolute');
        // $('.navigation').removeClass('mid');
        $('.navigation .navigation-menu').css({
            'margin-top': 0,
        });
    }
};

export const add_nav_menu_scroll = () => {
    let menu_inner_wrapper = $('.navigation .navigation-menu-menu--wrapper');

    navigationOverScroll = OverlayScrollbars(menu_inner_wrapper, {
        overflowBehavior: {
            x: 'visible-scroll',
            y: 'scroll',
        },
    });

    if ($(window).width() > 992) {
        menu_inner_wrapper.css({
            width: $(window).width() * 0.48,
        });
    }

    $(window).on('resize', nav_menu_width);

    nav_menu_width();
};
export const remove_nav_menu_scroll = () => {
    if (navigationOverScroll === null || typeof navigationOverScroll === 'undefined') return;

    navigationOverScroll.destroy();
};
export const nav_menu_scroll = () => {
    // remove previous event listeners
    $('.navigation').off('navigationOpened', add_nav_menu_scroll);
    $('body').off('navigationClosed', remove_nav_menu_scroll);

    let wrapper = $('.navigation .navigation-menu');
    let menu_wrapper = $('.navigation .navigation-menu-menu');
    let menu_inner_wrapper = $('.navigation .navigation-menu-menu--wrapper');
    let menu = $('.navigation .menu');

    let element_height =
        parseFloat(wrapper.css('padding-top')) + parseFloat(menu_wrapper.css('padding-top')) + menu.height();

    $('.sub-menu.dropped').each((_, element) => {
        element_height += $(element).height();
    });

    let container_height;
    if ($('.navigation-menu-social').length > 0) {
        container_height = window.innerHeight * 0.75;
    } else {
        container_height = window.innerHeight * 0.85;
    }

    if (element_height >= container_height) {
        // set a height on menu list
        if ($('.navigation-menu-social').length > 0) {
            menu_inner_wrapper.css('height', '75%');
        } else {
            menu_inner_wrapper.css('height', '95%');
        }
        add_nav_menu_scroll();
        $('.navigation').on('navigationOpened', add_nav_menu_scroll);
        $('body').on('navigationClosed', remove_nav_menu_scroll);
    } else {
        $('.navigation').off('navigationOpened', add_nav_menu_scroll);
        $('body').off('navigationClosed', remove_nav_menu_scroll);
        remove_nav_menu_scroll();
    }
};

export const nav_scroll_disable = () => {
    $('.navigation:not(.scrolled)').on('classChange', function () {
        if ($('.navigation:not(.scrolled)').hasClass('shown')) {
            scroll_inst.options('overflowBehavior.y', 'hidden');
            $('.navigation:not(.scrolled) .navigation-menu').css('margin-top', scroll_inst.scroll().position.y + 'px');
            $('.navigation:not(.scrolled) .navigation-bar').css('top', scroll_inst.scroll().position.y + 'px');
        } else {
            scroll_inst.options('overflowBehavior.y', 'scroll');
            $('.navigation:not(.scrolled) .navigation-menu').css('margin-top', '0px');
            $('.navigation:not(.scrolled) .navigation-bar').css('top', '0px');
        }
    });
};

export const dropdown_handler = () => {
    const clickHandler = (e) => {
        $('.navigation').trigger('dropdown-clicked');

        let target_drop = $(e.currentTarget).siblings('.sub-menu');
        let current_drop = $(e.target).siblings('.sub-menu');

        if (target_drop.length < 1) {
            return;
        }

        e.preventDefault();

        // check for dropdown in current menu
        if (!current_drop.hasClass('dropped') && $(e.target).parents('.sub-menu').length > 0) {
            current_drop.toggleClass('dropped').slideToggle();
            return;
        }

        // if the clicked dropdown is already open, close it and return
        if (target_drop.hasClass('dropped') && e.target === e.currentTarget) {
            target_drop.toggleClass('dropped').slideToggle();
            return;
        }

        // close existing open dropdowns
        $('.dropped').toggleClass('dropped').slideToggle();
        // open clicked dropdown
        target_drop.toggleClass('dropped').slideToggle();
    };

    const navLinkClickHandler = (e) => {
        // Close existing open dropdowns
        $('.dropped').toggleClass('dropped').slideToggle();
    };

    $(document).on('click', '.navigation-menu-menu .menu-item-has-children > a', clickHandler);
    $(document).on('click', '.navigation-menu-menu .page_item_has_children > a', clickHandler);
    $(document).on('click', '.navigation-menu-menu .sub-menu .navLink', navLinkClickHandler);

    return () => {
        $(document).off('click', '.navigation-menu-menu .menu-item-has-children > a', clickHandler);
        $(document).off('click', '.navigation-menu-menu .page_item_has_children > a', clickHandler);
        $(document).off('click', '.navigation-menu-menu .sub-menu .navLink', navLinkClickHandler);
    };
};

export const nav_menu_width = () => {
    // return if the navigation is not overflowing
    if (!navigation_overflow) return;
    const el = $('.navigation .navigation-menu-menu--wrapper');

    if ($(window).width() > 992) {
        el.css({
            width: $(window).width() * 0.48,
        });
    }
};

let main_color = '#ffffff';
let main_color_hover = '#00f6ff';

export const service_no_image_anim = function (e) {
    let icon = e.target.querySelector(':scope > a > .icon');
    let icon_path = icon.querySelectorAll('path');
    let text = e.target.querySelector(':scope > a > .text');
    let text_el = text.querySelector('h4');

    const tl = new gsap.timeline({
        defaults: { duration: 0.4, ease: 'Sine.easeout' },
    });

    let top_value = '30%';

    if ($(window).width() < 768) {
        top_value = '22.5%';
    }

    tl.fromTo(
        icon,
        {
            right: '3.5rem',
            x: 0,
            top: '3.5rem',
        },
        {
            right: '50%',
            x: '50%',
            top: top_value,
        }
    );

    tl.fromTo(
        icon_path,
        {
            fill: '#000000',
        },
        {
            fill: '#ffffff',
            delay: -0.4,
        }
    );

    tl.fromTo(
        text_el,
        {
            color: '#000000',
        },
        {
            color: '#ffffff',
            delay: -0.4,
        }
    )
        .fromTo(
            text,
            {
                left: '3.5rem',
                x: 0,
                bottom: '1.9rem',
            },
            {
                left: '50%',
                x: '-50%',
                bottom: '27%',
                delay: -0.4,
            }
        )
        .fromTo(
            e.target,
            {
                backgroundColor: hexa_to_rgba(main_color),
                borderColor: 'var(--slope-main-color)',
                delay: -0.4,
            },
            {
                backgroundColor: hexa_to_rgba(main_color_hover),
                borderColor: 'var(--slope-main-color)',
                delay: -0.4,
            }
        );

    $(e.target).on('mouseleave', () => {
        tl.reverse();
    });
};

export const nav_tl_driver = () => {
    // all the related elements
    let nav = $('.navigation-menu');
    let navImage = $('.navigation-menu .navigation-menu-image');
    let navMenu = $('.navigation-menu .navigation-menu-menu');
    let navLI = $('.navigation-menu .navigation-menu-menu .navigation-menu-menu--wrapper .menu > li');

    if (nav === null || nav === undefined) return;

    let nav_tl;

    const tl_inside = () => {
        // initializing the timeline
        nav_tl = new gsap.timeline({
            defaults: {
                duration: 0.4,
                ease: 'power4.out',
            },
            paused: true,
            onReverseComplete: () => {
                $('.navigation').removeClass('shown');
                $('.navigation:not(.scrolled)').trigger('classChange');
                $('body').trigger('navigationClosed');
                $('.navigation .hamburger').removeClass('align');
            },
        });

        // animating
        nav_tl.fromTo(
            nav,
            {
                top: '50%',
                opacity: 0,
                visibility: 'hidden',
                height: '0',
            },
            {
                top: 0,
                opacity: 1,
                visibility: 'visible',
                height: window.innerHeight,
            }
        );

        if (navImage.length > 0) {
            nav_tl.fromTo(
                navImage,
                {
                    y: '5%',
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                }
            );
        }

        nav_tl
            .fromTo(
                navMenu,
                {
                    y: '5%',
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    delay: $(navImage).length ? -0.2 : -0.3,
                }
            )
            .fromTo(
                navLI,
                {
                    y: '100px',
                    opacity: 0,
                    visibility: 'hidden',
                    stagger: 0.1,
                },
                {
                    y: 0,
                    opacity: 1,
                    visibility: 'visible',
                    stagger: 0.1,
                    delay: -0.2,
                }
            );

        nav_tl.reversed(true);
    };

    tl_inside();

    // handle opening and closing navigation menu
    $('.hamburger').on('click', 'a', (e) => {
        e.preventDefault();

        if (nav_tl.reversed()) {
            $('.navigation').addClass('shown');
            $('.navigation:not(.scrolled)').trigger('classChange');
            $('.navigation').trigger('navigationOpened');
            nav_tl.play();
        } else {
            nav_tl.reverse();
        }
    });

    $('.sub-menu .menu-item').on('click', (e) => {
        nav_tl.reverse();
    });

    const clear_tl = () => {
        if (!$('.navigation').hasClass('shown')) {
            nav_tl.clear();
            tl_inside();
        }
    };

    $(window).on('resize', clear_tl);
    $('body').on('navigationClosed', clear_tl);
};

///team member animation

export function team_member_anim(e) {
    let item = $(e.target).parents('.team-member');
    let listWrapper = $(item).children('.team-member-image').children('.team-member-social');
    let list = $(listWrapper).children();
    let listItem = $(list).children();

    if (item === null || item === undefined) return;

    const tl = new gsap.timeline({
        defaults: { duration: 0.2, ease: 'Sine.easeout' },
    });

    tl.fromTo(
        listWrapper,
        { top: '50%', opacity: 0, visibility: 'hidden' },
        { top: '0', opacity: 1, visibility: 'visible' }
    ).fromTo(
        listItem,
        { top: '5rem', opacity: 0, visibility: 'hidden', stagger: 0.1 },
        { top: '0', opacity: 1, visibility: 'visible', stagger: 0.1 }
    );

    $(this).on('mouseleave', () => {
        tl.reverse();
    });
}

//project animation

export function project_anim(e) {
    let item = e.target.closest('.project-list-single--wrapper');
    let item_content = item.querySelector('.project-list-single--content');
    let item_image = item.querySelector('img');
    let item_content_inner = item_content.querySelector('.project-list-single--content-inner');

    if (item === null || item === undefined) return;

    const tl = new gsap.timeline({
        defaults: { duration: 0.15, ease: 'Sine.easeout' },
    });
    tl.fromTo(item_content, { y: 100, opacity: 0, visibility: 'hidden' }, { y: 0, opacity: 1, visibility: 'visible' })
        .fromTo(
            item_content_inner.querySelector('.project-single-service-1'),
            { y: 50, opacity: 0, visibility: 'hidden' },
            { y: 0, opacity: 1, visibility: 'visible' }
        )
        .fromTo(
            item_content_inner.querySelector('h2'),
            { y: 50, opacity: 0, visibility: 'hidden' },
            { y: 0, opacity: 1, visibility: 'visible' }
        )
        .fromTo(
            item_content_inner.querySelector('.project-single-service-2'),
            { y: 50, opacity: 0, visibility: 'hidden' },
            { y: 0, opacity: 1, visibility: 'visible' }
        )
        .fromTo(item_image, { scale: 1 }, { scale: 1.2 }, 0)
        .fromTo(
            item_content_inner.querySelector('.project-single-button'),
            { y: 50, opacity: 0, visibility: 'hidden' },
            { y: 0, opacity: 1, visibility: 'visible' }
        );

    $(this).on('mouseleave mouseup', () => {
        tl.reverse();
    });
}

//scrollbar

export const scroll_inst = OverlayScrollbars(bodyEl, {
    nativeScrollbarsOverlaid: {
        showNativeScrollbars: false,
        initialize: true,
    },
    overflowBehavior: {
        x: 'hidden',
        y: 'scroll',
    },
    callbacks: {
        onInitialized: () => {
            $('body').trigger('overlayScrollbar');
        },
        onScroll: () => {
            nav_stick_scroll(scroll_inst);
        },
    },
});

//Preloader

export function p_nbsp() {
    $('p').each((index, element) => {
        if ($(element).html() === '&nbsp;' && $(window).width() < 1025) {
            $(element).css('height', '1.6rem');
        } else if ($(element).html() === '&nbsp;') {
            $(element).css('height', 'auto');
        }
    });
}
export const initializePage = () => {
    // add loaded class to body so that preloader can disappear
    $('body').addClass('loaded');

    $('.navigation').on('navigationOpened', () => {
        if ($('.navigation .logo > *').length > 0) {
            $('.navigation .hamburger').addClass('align');
        }
    });
};

export function service_image_anim(e) {

    if ($(window).width() < 992) {
        return;
    }

    let iconBox = e.target.querySelector('.service--box--image .icon');
    let iconSVG = iconBox.querySelector('svg');
    let iconSVGPath = iconSVG.querySelectorAll('path');

    let selector = e.target.closest('.service--box');

    const tl = new gsap.timeline({
        defaults: { duration: 0.5, ease: 'power4.out' },
    });

    tl.fromTo(
        iconBox,
        {
            width: '13.5rem',
            height: '13.5rem',
            opacity: 1,
            backgroundColor: 'rgba(0,246,255,1)',
        },
        {
            width: '100%',
            height: '100%',
            opacity: 1,
            backgroundColor: 'rgba(0,246,255,.5)',
        }
    );

    tl.fromTo(
        iconSVGPath,
        {
            fill: 'var(--slope-foreground)',
            delay: -0.5,
        },
        {
            fill: '#ffffff',
            delay: -0.5,
        }
    ).fromTo(
        iconSVG,
        {
            x: '-50%',
            y: '-50%',
            scale: 1,
            delay: -0.5,
        },
        {
            x: '-50%',
            y: '-50%',
            scale: 1.5,
            delay: -0.5,
        }
    );

    $(selector).on('mouseleave', () => {
        tl.reverse();
    });
}