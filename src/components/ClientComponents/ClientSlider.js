import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import ClientSlide from './ClientSlide';

function ClientSlider(props) {
    return (
        <div className="client-slider overflow-hidden">
            <div className="row">
                <div className="col-lg-12">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={4}
                        grabCursor={true}
                        autoplay={{
                            delay: 5000,
                        }}
                        loop={false}
                        speed={2500}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {props.slides.map((slide, index) => (
                            <SwiperSlide className="client-slide" key={index}>
                                <ClientSlide image={slide.image} url={slide.url} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default ClientSlider;
