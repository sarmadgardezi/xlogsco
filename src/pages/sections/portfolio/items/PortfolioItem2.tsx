// Images
import icon1 from '../../../../assets/images/services/icon_preciese.png';
import icon3 from '../../../../assets/images/services/icon_portfolio.png';
import icon2 from '../../../../assets/images/services/icon_responsive.png';
import icon4 from '../../../../assets/images/services/icon_support.png';

// -------------------

function PortfolioItem2() {
  return (
    <div className="portfolio-content">
      <div className="info-text">
        Two ghostly white figures in coveralls and helmets are softly dancing.
      </div>
      <div className="video-popup">
        <iframe
          src="https://player.vimeo.com/video/199192931"
          allowFullScreen></iframe>
      </div>
      <p>&nbsp;</p>
      <div className="one_half">
        <div className="service-holder">
          <div className="service-img">
            <img src={icon1} alt="preciese" />
          </div>
          <div className="service-txt">
            <h4>Preciese</h4>
            Phasellus vel est sem integer suscipit enim quis dictum.
          </div>
        </div>

        <div className="service-holder">
          <div className="service-img">
            <img src={icon2} alt="responsive" />
          </div>
          <div className="service-txt">
            <h4>Responsive</h4>
            Donec vel est sem integer suscipit enim quis lorem.
          </div>
        </div>
      </div>

      <div className="one_half last">
        <div className="service-holder">
          <div className="service-img">
            <img src={icon3} alt="portfolio" />
          </div>
          <div className="service-txt">
            <h4>Portfolio</h4>
            Amet vel est sem integer suscipit enim quis dolor.
          </div>
        </div>
        <div className="service-holder">
          <div className="service-img">
            <img src={icon4} alt="support" />
          </div>
          <div className="service-txt">
            <h4>Support</h4>
            Est sem integer suscipit enim quis dictum feugiat curabitur.
          </div>
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
}

export default PortfolioItem2;
