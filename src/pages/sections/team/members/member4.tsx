// UI Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Images
import member04 from '../../..//../assets/images/team/team_04_large.jpg';

// Icons
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faVimeoV,
  faBehance,
} from '@fortawesome/free-brands-svg-icons';

// -------------------

function Member4() {
  return (
    <div className="">
      <div className="">
        <div className="member-content">
          <div className="two_third">
            <div className="info-text">
              Two ghostly white figures in coveralls and helmets are soflty
              dancing.
            </div>
          </div>
          <div className="one_third last">
            Cras pretium metus pulvinar ultricies auctor. In varius purus
            blandit sem mollis tristique.
          </div>
          <div className="clear"></div>
          <div className="one_half">
            <strong>Jane Perry,</strong>
            CEO very small stage in a vast cosmic arena great turbulent clouds
            ready so encyclopaedia galactica star stuff.
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
            <p>&nbsp;</p>
            <p>
              Name: <strong>Terry Jackobs</strong>
            </p>
            <p>
              Age: <strong>28</strong>
            </p>
            <p>
              Main Skill: <strong>PhP, .NET, Ajax</strong>
            </p>
          </div>

          <div className="one_half last">
            <img src={member04} alt="team member 04" />
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}

export default Member4;
