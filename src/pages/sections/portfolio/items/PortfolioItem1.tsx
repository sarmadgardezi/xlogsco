// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../assets/images/portfolio/items/item1.jpg';
import item2 from '../../../../assets/images/portfolio/items/item2.jpg';

// -------------------

function PortfolioItem1() {
  return (
    <div className="">
      <div className="portfolio-content">
        <div className="info-text">
          Two ghostly white figures in coveralls and helmets are softly dancing.
        </div>

        <div id="slider2" className="image-slider-wrapper relative">
          <div className="image-slider-wrapper relative block-right">
            <Swiper
              pagination={{ clickable: true }}
              loop={true}
              modules={[Pagination]}
              className="portfolio-slider">
              <SwiperSlide>
                <img src={item1} alt="portfolio item 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item2} alt="portfolio item 1" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="two_third">
          Cras pretium metus pulvinar ultricies auctor. In varius purus blandit
          sem mollis tristique. Curabitur sed lorem vel ligula pulvinar
          porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus.
          Vangelis rich in heavy atoms descended from astronomers dream of the
          mind’s eye stuff.
        </div>

        <div className="one_third last">
          <p>
            <strong>Project Name</strong>
            <br />
            Phone Case Mockup
          </p>
          <p>
            <strong>Year</strong>
            <br />
            2018
          </p>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
}

export default PortfolioItem1;
