import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

// Images
import logo from '../assets/images/logo.png';

// Data
import navData from '../data/navbar.json';

// --------------

type NavbarProps = {
  isLanding: boolean;
};

function Navbar({ isLanding }: NavbarProps) {
  const [navActive, setNavActive] = useState<boolean>(false);

  /**
   * Hiding navigation on clicking a nav link (important in mobie view)
   */
  const handleLinkClick = () => {
    setNavActive(false);
  };

  /**
   * Toggle menu on clicking on menu btn
   */
  const handleMenuBtnClick = () => {
    setNavActive(!navActive);
  };

  return (
    <header className="header-holder">
      <div className="menu-wrapper center-relative relative">
        <div className="header-logo">
          <RouterLink to="/">
            <img src={logo} alt="Cardea" />
          </RouterLink>
        </div>

        <div className="toggle-holder">
          <div
            id="toggle"
            onClick={handleMenuBtnClick}
            className={navActive ? 'on' : ''}>
            <div className="first-menu-line"></div>
            <div className="second-menu-line"></div>
            <div className="third-menu-line"></div>
          </div>
        </div>

        <div className={navActive ? 'menu-holder show' : 'menu-holder'}>
          <nav id="header-main-menu">
            <ul className="main-menu sm sm-clean">
              {navData.navLinks.map((link, i) => (
                <li key={'nav-' + i} style={{ cursor: 'pointer' }}>
                  <ScrollLink
                    activeClass="active"
                    smooth
                    spy
                    to={link.to}
                    onClick={handleLinkClick}>
                    {link.text}
                  </ScrollLink>
                </li>
              ))}
              {/* <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#inspire">Inspire</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#clients">Clients</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li> */}
            </ul>
          </nav>
        </div>
        <div className="clear"></div>
      </div>
    </header>
  );
}

export default Navbar;
