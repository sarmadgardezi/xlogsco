// Images
import img1 from '../../../../assets/images/portfolio/items/item3.jpg';
import img2 from '../../../../assets/images/portfolio/items/item4.jpg';

// -------------------

function PortfolioItem3() {
  return (
    <div className="portfolio-content">
      <div className="info-text">
        Two ghostly white figures in coveralls and helmets are softly dancing.
      </div>
      <div className="one_half">
        <img src={img1} alt="" />
      </div>
      <div className="one_half last">
        <img src={img2} alt="" />
      </div>
      <div className="clear"></div>

      <div className="two_third">
        Vangelis rich in heavy atoms descended from astronomers dream of the
        mind’s eye stuff. Decipherment encyclopaedia galactica.
      </div>
      <div className="one_third last">
        <div className="text-left">
          <a href="#" className="button">
            Download
          </a>
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
}

export default PortfolioItem3;
