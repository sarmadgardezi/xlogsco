// UI Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Images
import member02 from '../../..//../assets/images/team/team_02_large.jpg';
// --> Services Icon
import precieseIcon from '../../../../assets/images/services/icon_preciese.png';
import portfolioIcon from '../../../../assets/images/services/icon_portfolio.png';
import responsiveIcon from '../../../../assets/images/services/icon_responsive.png';
import supportIcon from '../../../../assets/images/services/icon_support.png';

// Icons
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faVimeoV,
  faBehance,
} from '@fortawesome/free-brands-svg-icons';

// -------------------

function Member2() {
  return (
    <div className="">
      <div className="">
        <div className="member-content">
          <div className="one_half">
            <img src={member02} alt="team member 02" />
          </div>
          <div className="one_half last">
            <div className="info-text">
              Two ghostly white figures in coveralls and helmets are soflty
              dancing. Shores of the cosmic ocean permanence.
            </div>

            <p>&nbsp;</p>

            <div className="social">
              <a href="#" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <div className="social">
              <a href="#" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <div className="social">
              <a href="#" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="social">
              <a href="#" target="_blank">
                <FontAwesomeIcon icon={faVimeoV} />
              </a>
            </div>
            <div className="social">
              <a href="#" target="_blank">
                <FontAwesomeIcon icon={faBehance} />
              </a>
            </div>
          </div>
          <div className="clear"></div>

          <div className="one_half">
            <div className="service-holder">
              <div className="service-img">
                <img src={precieseIcon} alt="preciese icon" />
              </div>
              <div className="service-txt">
                <h4>Preciese</h4>
                Phasellus vel est sem integer suscipit enim quis dictum.
              </div>
            </div>

            <div className="service-holder">
              <div className="service-img">
                <img src={responsiveIcon} alt="responsive icon" />
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
                <img src={portfolioIcon} alt="portfolio icon" />
              </div>
              <div className="service-txt">
                <h4>Portfolio</h4>
                Amet vel est sem integer suscipit enim quis dolor.
              </div>
            </div>

            <div className="service-holder">
              <div className="service-img">
                <img src={supportIcon} alt="support icon" />
              </div>
              <div className="service-txt">
                <h4>Support</h4>
                Est sem integer suscipit enim quis dictum feugiat curabitur.
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}

export default Member2;
