(function ($) {
    'use strict';

    function hexa_to_rgba(h, alpha = null) {
        if (!h.includes('#')) {
            return h;
        }

        let r = 0,
            g = 0,
            b = 0,
            a = 1;

        if (h.length == 7) {
            r = '0x' + h[1] + h[2];
            g = '0x' + h[3] + h[4];
            b = '0x' + h[5] + h[6];
            a = '1';
        } else if (h.length == 9) {
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

    //applied the following to App.js
    window.addEventListener('load', () => {
        let main_color = getComputedStyle(document.body).getPropertyValue('--slope-main-color').trim();

        let changed_color_50 = hexa_to_rgba(main_color, '.50');
        document.querySelector('body').style.setProperty('--slope-main-color-50', changed_color_50);

        let changed_color_20 = hexa_to_rgba(main_color, '.25');
        document.querySelector('body').style.setProperty('--slope-main-color-25', changed_color_20);
    });
    //applied the above to App.js

    //applied the following to serviceWithoutImage
    $(window).on('load', () => {
        $('.service-withoutimage .service--box-icon').on('mouseenter', service_no_image_anim);

        let main_color = '#ffffff';
        let main_color_hover = '--slope-main-color';

        main_color_hover = getComputedStyle(document.body).getPropertyValue(main_color_hover).trim();

        function service_no_image_anim(e) {
            let objectClass = this.className.replace('service--box-icon ', '.');
            let icon = $(`${objectClass} > a > .icon`);
            let text = $(`${objectClass} > a > .text`);
            const tl = new gsap.timeline({
                defaults: {
                    duration: 0.4,
                    ease: 'Sine.easeout',
                },
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

            if ($(`${objectClass} > a > .icon i`).length > 0) {
                tl.fromTo(
                    `${objectClass} > a > .icon i`,
                    {
                        color: '#000000',
                    },
                    {
                        color: '#ffffff',
                        delay: -0.4,
                    }
                );
            }

            if ($(`${objectClass} > a > .icon svg`).length > 0) {
                tl.fromTo(
                    `${objectClass} > a > .icon svg path`,
                    {
                        fill: '#000000',
                    },
                    {
                        fill: '#ffffff',
                        delay: -0.4,
                    }
                );
            }

            tl.fromTo(
                `${objectClass} > a > .text h4`,
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
                    `${objectClass}`,
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

            $(this).on('mouseleave', () => {
                tl.reverse();
            });
        }
    });
    //applied the above to serviceWithoutImage

    //applied the following to servicebox
    $(window).on('load', () => {
        let main_color = '--slope-main-color';
        let hover_color = '--slope-main-color-50';

        main_color = getComputedStyle(document.body).getPropertyValue(main_color).trim();
        hover_color = getComputedStyle(document.body).getPropertyValue(hover_color).trim();

        /********************
        service box animation
        ********************/
        $('.service-image .service--box').on('mouseenter', service_image_anim);

        $(window).on('resize', (e) => {
            if ($(window).width() <= 900) {
                $('.service--box--image .icon').css({
                    bottom: 0,
                    transform: 'translate(0,0)',
                });
            } else {
                $('.service--box--image .icon').css({
                    bottom: '50%',
                    transform: 'translate(0,-50%)',
                });
            }
        });

        function service_image_anim(e) {}
    });
    //applied the above to servicebox

    $(window).on('load', () => {
        let $container = $('.blog-isotope-container'); //The ID for the list with all the blog posts

        if ($container.length < 1) return;

        $container
            .isotope({
                //Isotope options, 'item' matches the class in the PHP
                itemSelector: '.blog-list-item',
                layoutMode: 'fitRows',
            })
            .css('overflow', 'hidden');

        //Add the class selected to the item that is clicked, and remove from the others
        let $optionSets = $('.filter');

        if ($optionSets.length < 1) return;

        let $optionLinks = $optionSets.find('a');

        $optionLinks.click(function () {
            let $this = $(this);

            // don't proceed if already selected
            if ($this.hasClass('selected')) {
                return false;
            }

            let $optionSet = $this.parents('.filter');
            $optionSets.find('.selected').removeClass('selected');
            $this.addClass('selected');

            //When an item is clicked, sort the items.
            let selector = $(this).attr('data-filter');
            $container.isotope({ filter: selector });

            return false;
        });

        let selectBox = $optionSets.find('select');

        $(selectBox).on('change', (e) => {
            $container.isotope({ filter: e.target.value });
        });
    });

    /****************************************
    image slider - start
    ****************************************/

    let image_slider = new Swiper('.image-slider:not(.project-slider) .swiper-container', {
        loop: true,
        speed: 3000,
        slidesPerView: 1,
        spaceBetween: 0,
        resizeObserver: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });

    let project_slider = new Swiper('.project-slider .swiper-container', {
        loop: true,
        speed: 3000,
        slidesPerView: 1,
        spaceBetween: 0,
        resizeObserver: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.project-slider .slider--nav-prev',
            nextEl: '.project-slider .slider--nav-next',
        },
    });

    /****************************************
    image slider - end
    ****************************************/

    /****************************************
    video - start
    ****************************************/

    $('video').on('ended', function () {
        this.pause();
        this.currentTime = 0.44;
        this.play();
    });

    /****************************************
    video - end
    ****************************************/

    /****************************************
    navigation - start
    ****************************************/

    // handle the stickness of the navigation on scroll
    const nav_stick_scroll = (instance) => {
        let scrollPosition;

        // determine the scroll position
        scrollPosition = instance.scroll().position.y;

        let nav_el = $('.navigation.enabled-sticky');
        let is_scrolled = nav_el.hasClass('scrolled');
        let is_shown = nav_el.hasClass('shown');
        let height = nav_el.height();

        // if the user has scrolled but the menu is not open
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
        } else if (scrollPosition <= height && scrollPosition == 0 && !is_shown) {
            $('.navigation.enabled-sticky').removeClass('scrolled');
            $('.placeholder').css('position', 'absolute');
            // $('.navigation').removeClass('mid');
            $('.navigation .navigation-menu').css({
                'margin-top': 0,
            });
        }
    };

    $('body').addClass('custom-scrollbar');

    let scroll_inst = OverlayScrollbars($('body'), {
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

    const placeholder_init = () => {
        let offset = 0;
        if ($('.navigation:not(.shown):not(.scrolled)').length > 0) {
            offset = $('.navigation:not(.shown):not(.scrolled)').offset().top;
        }
        $('.placeholder').css({
            width: '10vw',
            height: $('.navigation:not(.shown):not(.scrolled)').height(),
            top: offset,
        });
    };

    // the main timeline instance for the navigation animation
    // export let nav_tl;

    const tl = (tl) => {
        let nav = $('.navigation-menu');
        return tl.fromTo(
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
    };

    // the main driver function for the navigation opening and closing animation
    const nav_tl_driver = () => {
        // all the related elements
        let nav = $('.navigation-menu');
        let navImage = $('.navigation-menu .navigation-menu-image');
        let navMenu = $('.navigation-menu .navigation-menu-menu');
        let navLI = $('.navigation-menu .navigation-menu-menu .navigation-menu-menu--wrapper .menu > li');

        if (nav == null || nav == undefined) return;

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

            // nav_tl = tl( nav_tl );

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
                nav_tl.fromTo(navImage, { y: '5%', opacity: 0 }, { y: 0, opacity: 1 });
            }

            nav_tl
                .fromTo(
                    navMenu,
                    { y: '5%', opacity: 0 },
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

        const clear_tl = () => {
            if (!$('.navigation').hasClass('shown')) {
                nav_tl.clear();
                tl_inside();
            }
        };

        $(window).on('resize', clear_tl);
        $('body').on('navigationClosed', clear_tl);
    };

    // handle the opening and closing of the dropdown menu
    const dropdown_handler = () => {
        $(document).on('click', '.navigation-menu-menu .menu-item-has-children > a', (e) => {
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
        });

        $(document).on('click', '.navigation-menu-menu .page_item_has_children> a', (e) => {
            e.preventDefault();
            $('navigation').trigger('dropdown-clicked');
            // $(e.target).parents('.page_item').siblings().removeClass('dropped');
            // $(e.target).parents('.page_item').toggleClass('dropped');
            $(e.currentTarget).parents('.sub-menu').slideToggle();
        });
    };

    let navigation_overflow;

    // set the width for the navigation menu wrapper
    const nav_menu_width = () => {
        // return if the navigation is not overflowing
        if (!navigation_overflow) return;
        const el = $('.navigation .navigation-menu-menu--wrapper');

        if ($(window).width() > 992) {
            el.css({
                width: $(window).width() * 0.48,
            });
        }
    };

    let navigationOverScroll = null;

    const add_nav_menu_scroll = () => {
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

    const remove_nav_menu_scroll = () => {
        if (navigationOverScroll == null || typeof navigationOverScroll === 'undefined') return;
        // navigationOverScroll.forEach((element) => {
        //     element.destroy();
        // });
        navigationOverScroll.destroy();
    };

    const nav_menu_scroll = () => {
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

    // determine whether a thick scrollbar is being displayed on the screen
    // add class .thick-scrollbar to the body if a thick scrollbar is displayed
    const scrollWidth = () => {
        if ($(window).outerWidth() > $(window).width()) {
            $('body').addClass('thick-scrollbar');
        } else {
            $('body').removeClass('thick-scrollbar');
        }
    };

    // make sure that the navigation menu always stays on top when it is shown
    const nav_scroll_disable = () => {
        $('.navigation:not(.scrolled)').on('classChange', function () {
            if ($('.navigation:not(.scrolled)').hasClass('shown')) {
                scroll_inst.options('overflowBehavior.y', 'hidden');
                $('.navigation:not(.scrolled) .navigation-menu').css(
                    'margin-top',
                    scroll_inst.scroll().position.y + 'px'
                );
                $('.navigation:not(.scrolled) .navigation-bar').css('top', scroll_inst.scroll().position.y + 'px');
            } else {
                scroll_inst.options('overflowBehavior.y', 'scroll');
                $('.navigation:not(.scrolled) .navigation-menu').css('margin-top', '0px');
                $('.navigation:not(.scrolled) .navigation-bar').css('top', '0px');
            }
        });
    };

    const footer_height = () => {
        // do not process for custom scrollbar because the plugin handles scrolling differently
        // and making footer position absolute causes it to absolute to the screen not the document
        if ($('body').hasClass('custom-scrollbar')) return;
        let height = $('.footer').height();
        let padding = getComputedStyle(document.querySelector(':root')).getPropertyValue('--side-padding');
        padding = parseFloat(padding) * 10;
        // adding -3 because it causes extra space above the footer on mobile devices
        $('body').css('padding-bottom', height + padding - 3 + 'px');
    };

    $('body').on('overlayScrollbar', footer_height);

    const nav_line_height = () => {
        if ($(window).width() >= 499) {
            $('.navigation-menu-menu').removeClass('line-height-overflow');
            return;
        }

        $('.navigation .menu-item').each((_, item) => {
            if (parseInt($(item).css('line-height')) < $(item).height()) {
                $('.navigation-menu-menu').addClass('line-height-overflow');
            }
        });
    };

    // event listeners

    // on load event listener
    $(window).on('load', () => {
        // initialize the animation timeline for the navigation
        nav_tl_driver();

        // navigation menu dropdown handler
        dropdown_handler();

        // handle the scroll for the menu links if they overflow
        nav_menu_scroll();

        // handle page scrolling when navigation menu is shown
        nav_scroll_disable();

        // compensate for the height of the footer
        footer_height();

        // determine the scroll width of the window
        scrollWidth();

        // determine if any navigation item is taking multiple lines
        nav_line_height();
    });

    // on resize event listener
    $(window).on('resize', () => {
        // handle the scroll for the menu links if they overflow
        nav_menu_scroll();

        // initialize the placeholder for smooth stickness of the navigation
        placeholder_init();

        // determine the scroll width of the window
        scrollWidth();

        // compensate for the height of the footer
        footer_height();

        // update opened navigation height on resize
        // it is implemented this way because 100vh works differently on phones
        // and bottom part of the menu is hidden, so this is a fix
        let nav = $('.navigation.shown .navigation-menu');
        nav.css('height', window.innerHeight);

        // determine if any navigation item is taking multiple lines
        nav_line_height();
    });

    $('.navigation').on('navigationOpened', () => {
        // update opened navigation height on resize
        // it is implemented this way because 100vh works differently on phones
        // and bottom part of the menu is hidden, so this is a fix
        let nav = $('.navigation .navigation-menu');
        nav.css('height', window.innerHeight);
    });

    $('.navigation').on('dropdown-clicked', () => {
        // handle the scroll for the menu links if they overflow
        setTimeout(nav_menu_scroll, 400);
    });

    // on custom scrollbar initialization
    $('body').on('overlayScrollbar', () => {
        // determine the scroll width of the window
        scrollWidth();
    });

    /****************************************
    navigation - end
    ****************************************/

    /****************************************
    testimonial slider - start
    ****************************************/

    let testimonial_slider = new Swiper('.testimonial-slider .swiper-container', {
        runCallbacksOnInit: true,
        init: false,
        speed: 2000,
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
            1024: {
                spaceBetween: 30,
                slidesPerView: 1,
            },
            0: {
                spaceBetween: 20,
                slidesPerView: 1,
            },
        },
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: '.slider--nav-561011f .slider--nav-next',
            prevEl: '.slider--nav-561011f .slider--nav-prev',
        },
    });

    testimonial_slider.on('init', function () {
        let offer = $('.slider--nav-numbers');
        if (testimonial_slider.slides.length < 10) {
            offer.html('0' + (testimonial_slider.activeIndex + 1) + ' / ' + '0' + testimonial_slider.slides.length);
        } else {
            offer.html(testimonial_slider.activeIndex + 1 + ' / ' + testimonial_slider.slides.length);
        }
    });

    testimonial_slider.on('transitionEnd', function () {
        let offer = $('.slider--nav-numbers');
        if (testimonial_slider.slides.length < 10) {
            offer.html('0' + (testimonial_slider.activeIndex + 1) + ' / ' + '0' + testimonial_slider.slides.length);
        } else {
            offer.html(testimonial_slider.activeIndex + 1 + ' / ' + testimonial_slider.slides.length);
        }
    });

    testimonial_slider.init();

    /****************************************
    testimonial slider - end
    ****************************************/

    /****************************************
    client slider - start
    ****************************************/

    let client_slider = new Swiper('.client-slider .swiper-container', {
        speed: 2000,
        slidesPerView: 4,
        spaceBetween: 0,
        breakpoints: {
            991.98: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            500: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
        autoplay: {
            delay: 2000,
        },
    });

    /****************************************
    client slider - end
    ****************************************/

    /****************************************
    team - start
    ****************************************/
    $(document).on('mouseenter', '.team-member', team_member_anim);

    function team_member_anim(e) {
        let item = $(e.target).parents('.team-member');
        let listWrapper = $(item).children('.team-member-image').children('.team-member-social');
        let list = $(listWrapper).children();
        let listItem = $(list).children();

        if (item == null || item == undefined) return;

        const tl = new gsap.timeline({
            defaults: { duration: 0.2, ease: 'Sine.easeout' },
        });

        tl.fromTo(
            listWrapper,
            { top: '50%', opacity: 0, visibility: 'hidden' },
            { top: '0', opacity: 1, visibility: 'visible' }
        ).fromTo(
            listItem,
            {
                top: '5rem',
                opacity: 0,
                visibility: 'hidden',
                stagger: 0.1,
            },
            {
                top: '0',
                opacity: 1,
                visibility: 'visible',
                stagger: 0.1,
            }
        );

        $(this).on('mouseleave', () => {
            tl.reverse();
        });
    }

    /****************************************
    team - end
    ****************************************/

    /****************************************
    project - start
    ****************************************/
    $(document).on('mouseenter mousedown', '.project-list-2 .project-list-single--wrapper', project_anim);

    function project_anim(e) {
        let item = $(e.target).parents('.project-list-single--wrapper');
        let item_content = $(item).children('.project-list-single').children('.project-list-single--content');
        let item_image = $(item).find('img');
        let item_content_inner = $(item_content).children('.project-list-single--content-inner');

        if (item == null || item == undefined) return;

        const tl = new gsap.timeline({
            defaults: { duration: 0.15, ease: 'Sine.easeout' },
        });
        tl.fromTo(
            item_content,
            { y: 100, opacity: 0, visibility: 'hidden' },
            { y: 0, opacity: 1, visibility: 'visible' }
        )
            .fromTo(
                $(item_content_inner).children('.project-single-service-1'),
                { y: 50, opacity: 0, visibility: 'hidden' },
                { y: 0, opacity: 1, visibility: 'visible' }
            )
            .fromTo(
                $(item_content_inner).children('h2'),
                { y: 50, opacity: 0, visibility: 'hidden' },
                { y: 0, opacity: 1, visibility: 'visible' }
            )
            .fromTo(
                $(item_content_inner).children('.project-single-service-2'),
                { y: 50, opacity: 0, visibility: 'hidden' },
                { y: 0, opacity: 1, visibility: 'visible' }
            )
            .fromTo(item_image, { scale: 1 }, { scale: 1.2 }, 0)
            .fromTo(
                $(item_content_inner).children('.project-single-button'),
                { y: 50, opacity: 0, visibility: 'hidden' },
                { y: 0, opacity: 1, visibility: 'visible' }
            );

        $(this).on('mouseleave mouseup', () => {
            tl.reverse();
        });
    }

    $(window).on('load resize', () => {
        if ($(window).width() > 1024) return;

        $('.project-list-2 .project-list-single--wrapper').each((_, element) => {
            let height = $(element).find('.project-list-single--content-inner').height();

            $(element).height(height + 200);
        });
    });
    /****************************************
    project - end
    ****************************************/

    /****************************************
    bootstrap select - start
    ****************************************/
    $(function () {
        if ($.isFunction($.fn.selectpicker)) $('select').selectpicker();
    });

    /****************************************
    bootstrap select - end
    ****************************************/

    /****************************************
    select bootstrap - start
    ****************************************/
    $('select').on('rendered.bs.select', () => {
        let item = $('.bootstrap-select .dropdown-menu:not(.inner)');
        if (item.length < 1) return;
        let instance = OverlayScrollbars(item, {
            className: 'select-os',
            scrollbars: {
                visibility: 'auto',
                autoHide: 'never',
                autoHideDelay: 800,
                dragScrolling: true,
                clickScrolling: true,
                touchSupport: true,
                snapHandle: false,
            },
        });
    });

    /****************************************
    select bootstrap - end
    ****************************************/

    /****************************************
    svg conversion - start
    ****************************************/

    $(window).on('load', () => {
        $('img.svg').each(function () {
            var $img = $(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            $.get(
                imgURL,
                function (data) {
                    // Get the SVG tag, ignore the rest
                    var $svg = $(data).find('svg');

                    // Add replaced image's ID to the new SVG
                    if (typeof imgID !== 'undefined') {
                        $svg = $svg.attr('id', imgID);
                    }
                    // Add replaced image's classes to the new SVG
                    if (typeof imgClass !== 'undefined') {
                        $svg = $svg.attr('class', imgClass + ' replaced-svg');
                    }

                    // Remove any invalid XML tags as per http://validator.w3.org
                    $svg = $svg.removeAttr('xmlns:a');

                    // Replace image with new SVG
                    $img.replaceWith($svg);
                },
                'xml'
            );
        });
    });

    /****************************************
    svg conversion - end
    ****************************************/

    /****************************************
    MISC - start
    ****************************************/

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

            if (isNaN(lineHeight) || isNaN(fontSize) || fontSize == lineHeight) return;

            if (fontSize > lineHeight) {
                $(element).css('line-height', fontSize + 14 + 'px');
            }
        });
    });

    $(window).on('load', p_nbsp);
    $(window).on('resize', p_nbsp);

    function p_nbsp() {
        $('p').each((index, element) => {
            if ($(element).html() === '&nbsp;' && $(window).width() < 1025) {
                $(element).css('height', '1.6rem');
            } else if ($(element).html() === '&nbsp;') {
                $(element).css('height', 'auto');
            }
        });
    }

    /****************************************
    MISC - end
    ****************************************/

    /****************************************
    blockquote - start
    ****************************************/

    $(window).on('load', () => {
        $('blockquote').each((index, element) => {
            if ($(element).width() <= 200) {
                $(element).addClass('small-blockquote');
            }

            let p_element = $(element).children('p');
            let inside_cite = $(p_element).children('cite');

            if (inside_cite.length > 0) {
                $(element).html($(element).html() + $(inside_cite).get(0).outerHTML);
                $(element).children('p').children('cite').remove();
                $(element).children('p').children('br').remove();
            }

            $(element).children('cite').children('br').remove();

            $(element)
                .children('p')
                .html('“' + $(element).children('p').html() + '”');
        });
    });

    /****************************************
    blockquote - end
    ****************************************/

    /****************************************
    comment - start
    ****************************************/

    $('.comment-reply-link').on('click', function () {
        $('#cancel-comment-reply-link')
            // .insertAfter( '.form-submit-row div' )
            .appendTo('.form-submit-row .cancel');
        // .wrapAll('<div class="col-lg-6 cancel"></div>')
    });

    /****************************************
    comment - end
    ****************************************/

    /****************************************
    responsive table - start
    ****************************************/
    $(window).on('load', () => {
        $('table').each((_, table) => {
            $(table).wrap('<div class="table-wrapper"></div>');
        });
    });
    /****************************************
    responsive table - end
    ****************************************/

    /****************************************
    blog grid - start
    ****************************************/
    $(window).on('load', () => {
        $(
            '.blog-page:not(.sidebar-displayed) .blog-list-container > .row, .blog-list-container-grid-1, .blog-list-container-grid, .content-column:not(.left-sidebar):not(.right-sidebar) .blog-list-container > .row'
        ).masonry({
            percentPosition: true,
        });
    });
    /****************************************
    blog grid - end
    ****************************************/

    /****************************************
    widget anchor span - start
    ****************************************/
    $(window).on('load', () => {
        let elements = ['.wp-block-page-list', '.widget_categories', '.widget_archive', '.widget_meta'];
        elements.forEach((element) => {
            let anchors = $(element).find('a');
            anchors.each((__, anchor) => {
                $(anchor).wrapInner('<span></span>');
            });
        });
    });
    /****************************************
    widget anchor span - end
    ****************************************/
})(jQuery);
