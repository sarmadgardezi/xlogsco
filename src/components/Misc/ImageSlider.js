import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import illustration from '../../assets/images/art_1.png';

import Art from './Art';

function ImageSlider(props) {
    const swiperRef = useRef(null);

    const goToPrevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const goToNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <>
            <div className="image-slider project-slider">
                <Swiper
                    ref={swiperRef}
                    className="testimonial-slider"
                    modules={[Navigation, Scrollbar, Autoplay]}
                    slidesPerView={1}
                    grabCursor={true}
                    autoplay={{ delay: 5000 }}
                    loop={false}
                    speed={2500}
                >
                    <div className="swiper-wrapper">
                        {props.images.map((imageSlide, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="single-image">
                                        <img src={imageSlide.image} alt={imageSlide.alt} />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </div>
                </Swiper>

                {props.swiperNav && (
                    <div className="slider--nav">
                        <div className="slider--nav-prev" onClick={goToPrevSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.75 43.564">
                                <title>arrow-left</title>
                                <path
                                    d="M22.612.343l.69.691h0a1.171,1.171,0,0,1,0,1.656L5.87,20.122H42.579a1.172,1.172,0,0,1,1.172,1.172v.976a1.172,1.172,0,0,1-1.172,1.172H5.87L23.3,40.873h0a1.171,1.171,0,0,1,0,1.656l-.69.692a1.174,1.174,0,0,1-1.658,0L.344,22.611h0a1.172,1.172,0,0,1,0-1.657L20.954.343A1.174,1.174,0,0,1,22.612.343Z"
                                    transform="translate(0 0)"
                                ></path>
                            </svg>
                        </div>
                        <div className="slider--nav-next" onClick={goToNextSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.75 43.564">
                                <title>arrow</title>
                                <path
                                    d="M1027.744,1417.179l20.61,20.61a1.172,1.172,0,0,1,0,1.658l-20.61,20.611a1.174,1.174,0,0,1-1.658,0l-.69-.692a1.171,1.171,0,0,1,0-1.657l17.431-17.431h-36.708a1.172,1.172,0,0,1-1.172-1.172v-.976a1.172,1.172,0,0,1,1.172-1.172h36.708l-17.431-17.431a1.171,1.171,0,0,1,0-1.657l.69-.691A1.174,1.174,0,0,1,1027.744,1417.179Z"
                                    transform="translate(-1004.947 -1416.836)"
                                ></path>
                            </svg>
                        </div>
                    </div>
                )}
            </div>

            {!props.noArt && <Art art={illustration} type="3" />}
        </>
    );
}

export default ImageSlider;
