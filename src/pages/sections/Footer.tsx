// UI Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Icons
import {
  faFacebookF,
  faTwitter,
  faBehance,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';

// Functions
import { markdownToHTML } from '../../utils/converter';

// Data
import footerData from '../../data/footer.json';

// -----

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content center-relative">
        <div className="footer-mail">
          <a href={footerData.mail.to}>{footerData.mail.text}</a>
        </div>
        <div className="footer-number">
          <a href={footerData.phone.to}>{footerData.phone.text}</a>
        </div>
        <div
          className="footer-info"
          dangerouslySetInnerHTML={{ __html: markdownToHTML(footerData.info) }}
        />

        <div className="social-holder">
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#">
            {' '}
            <FontAwesomeIcon icon={faBehance} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faDribbble} />
          </a>
        </div>

        <div className="copyright-holder">
          © {new Date().getFullYear()} Cardea React Template by
          <a href={footerData.author.to}> {footerData.author.text}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
