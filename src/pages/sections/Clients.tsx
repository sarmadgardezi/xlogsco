// Plugins
// -->Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import client1 from '../../assets/images/clients/client_logo_01.png';
import client2 from '../../assets/images/clients/client_logo_02.png';
import client3 from '../../assets/images/clients/client_logo_03.png';
import client4 from '../../assets/images/clients/client_logo_04.png';
import client5 from '../../assets/images/clients/client_logo_05.png';
import client6 from '../../assets/images/clients/client_logo_06.png';
import reviewer1 from '../../assets/images/clients/testimonials/testiomonial_img_01.jpg';
import reviewer2 from '../../assets/images/clients/testimonials/testiomonial_img_02.jpg';
import reviewer3 from '../../assets/images/clients/testimonials/testiomonial_img_03.jpg';

// Data
import clientsData from '../../data/clients.json';

// -------

function Clients() {
  const reviewersImages: string[] = [reviewer1, reviewer2, reviewer3];

  return (
    <section id="clients" className="section full-width">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          <div className="one_half">
            <div className="text-slider-wrapper relative">
              <div className="text-slider-header-quotes"></div>

              <div
                id="textSlider1"
                className="text-slider slider owl-carousel owl-theme">
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={true}
                  loop={true}
                  grabCursor={true}
                  modules={[Pagination, Autoplay]}
                  className="clients-slider">
                  {clientsData.testimonials.map((reviewer, i) => (
                    <SwiperSlide key={'clients-testimonials-review-' + i}>
                      <p className="text-slide-content">{reviewer.review}</p>
                      <img
                        className="text-slide-img"
                        src={reviewersImages[i]}
                        alt=""
                      />
                      <p className="text-slide-name">{reviewer.name}</p>
                      <p className="text-slide-position">{reviewer.job}</p>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="clear"></div>
            </div>
          </div>

          <div className="one_fourth top-80">
            <img src={client1} alt="" className="bottom-25 aligncenter" />
            <img src={client5} alt="" className="bottom-25 aligncenter" />
            <img src={client2} alt="" className="bottom-25 aligncenter" />
          </div>

          <div className="one_fourth last top-80">
            <img src={client6} alt="" className="bottom-25 aligncenter" />
            <img src={client3} alt="" className="bottom-25 aligncenter" />
            <img src={client4} alt="" className="bottom-25 aligncenter" />
          </div>
          <div className="clear"></div>
        </div>
        <div className="clear"></div>
      </div>
    </section>
  );
}

export default Clients;
