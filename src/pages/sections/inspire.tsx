// Plugins
// --> Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// UI Components
import { Link as ScrollLink } from 'react-scroll';

// Images
import sectionBackground from '../../assets/images/inspire/bg_sec.jpg';
import slideImg1 from '../../assets/images/inspire/img_01.png';
import slideImg2 from '../../assets/images/inspire/img_02.png';
import slideImg3 from '../../assets/images/inspire/img_03.png';

// -------------

function Inspire() {
  return (
    <section
      id="inspire"
      className="section full-screen full-width"
      style={{ background: `url(${sectionBackground})` }}>
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          <div className="image-slider-wrapper relative block-right">
            <Swiper
              pagination={{ clickable: true }}
              autoplay={true}
              loop={true}
              modules={[Pagination, Autoplay]}
              className="inspire-slider">
              <SwiperSlide>
                <ScrollLink smooth spy to={'services'}>
                  <img src={slideImg1} alt="inspire image 1" />
                </ScrollLink>
              </SwiperSlide>
              <SwiperSlide>
                <ScrollLink smooth spy to={'team'}>
                  <img src={slideImg2} alt="inspire image 2" />
                </ScrollLink>
              </SwiperSlide>
              <SwiperSlide>
                <ScrollLink smooth spy to={'contact'}>
                  <img src={slideImg3} alt="inspire image 3" />
                </ScrollLink>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inspire;
