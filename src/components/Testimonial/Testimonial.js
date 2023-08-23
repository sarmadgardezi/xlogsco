import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Testimonialtemplate from './Testimonialtemplate';
import testimonials from '../../Data/testimonials';
import Art from '../Misc/Art';
import illustration from '../../assets/images/art_2.png';

function Testimonial(props) {
    const [totalSlides, setTotalSlides] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        const slider = swiperRef.current;

        const updateSliderNav = () => {
            setActiveSlide(slider?.swiper?.activeIndex);
            setTotalSlides(slider?.swiper?.slides?.length);
        };

        if (slider?.swiper) {
            updateSliderNav();
            slider.swiper.on('slideChange', updateSliderNav);
        }
    }, []);

    const formatSlideNumber = (number) => {
        return number.toString().padStart(2, '0');
    };

    return (
        <div className="testimonial-section">
            <div className="testimonial-section-wrapper bg-grey position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                ref={swiperRef}
                                className="testimonial-slider"
                                modules={[Navigation, Scrollbar, Autoplay]}
                                navigation={{
                                    prevEl: prevRef?.current,
                                    nextEl: nextRef?.current
                                }}
                                slidesPerView={1}
                                grabCursor={true}
                                autoplay={{
                                    delay: 5000,
                                }}
                                loop={false}
                                speed={2500}
                            >
                                {testimonials.map((item, index) => (
                                    <SwiperSlide className="testimonial-slide" key={index}>
                                        <Testimonialtemplate
                                            name={item.name}
                                            testimony={item.testimony}
                                            designation={item.designation}
                                            image={item.image}
                                        />
                                    </SwiperSlide>
                                ))}

                                <div className="slider--nav slider--nav-561011f">
                                    <div className="slider--nav-prev" ref={prevRef}>
                                        <i className="fas fa-arrow-left"></i>
                                    </div>
                                    <h6 className="slider--nav-numbers">
                                        {formatSlideNumber(activeSlide + 1)} / {formatSlideNumber(totalSlides)}
                                    </h6>
                                    <div className="slider--nav-next" ref={nextRef}>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
                {!props.noArt && <Art art={illustration} type={`${props.type || '2'}`} />}
            </div>
        </div>
    );
}

export default Testimonial;
