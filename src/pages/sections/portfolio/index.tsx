import { useState } from 'react';

// Plugins
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// UI Components
import PortfolioItem1 from './items/PortfolioItem1';
import PortfolioItem2 from './items/PortfolioItem2';
import PortfolioItem3 from './items/PortfolioItem3';

// Images
import num02 from '../../../assets/images/sections/02_left.png';
import portfolio1 from '../../../assets/images/portfolio/img_01s.jpg';
import portfolio2 from '../../../assets/images/portfolio/img_02s.jpg';
import portfolio3 from '../../../assets/images/portfolio/img_10s.jpg';
import portfolio4 from '../../../assets/images/portfolio/img_11s.jpg';
import portfolio5 from '../../../assets/images/portfolio/img_12s.jpg';

// --> Icon Images
import backArrow from '../../../assets/images/close-left-arrow.png';
import closeIcon from '../../../assets/images/close.png';

// Functions
import { markdownToHTML } from '../../../utils/converter';

// Data
import portfolioData from '../../../data/portfolio.json';

// --------------

function Portfolio() {
  const images: string[] = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
  ];

  // Portfolio item to be shown (change rendered different components in item folder)
  const [portfolioItem, setPortfolioItem] = useState<number>(0);
  // Portfolio item to be shown as a popup
  const [openPortfolio, setOpenPortfolio] = useState<number>(0);

  /**
   * Opening portfolio item that the user clicked
   *
   * @param num portfolio item to be open
   */
  const handleOpenItem = (num: number) => {
    const element: HTMLElement | null =
      document.getElementById('portfolio-wrapper');
    if (element) {
      element.scrollIntoView();
    }

    setPortfolioItem(num);
  };

  /**
   * Close Opened portfolio item and show the portfolio grid images
   */
  const handlCloseItem = () => {
    setPortfolioItem(0);
  };

  /**
   * Open a popup of the item with the given number passed to the function
   *
   * @param num Pop up item number to be open
   */
  const handleOpenPopup = (num: number) => {
    setOpenPortfolio(num);
  };

  /**
   * Closed the opened items by reseting the {openPortfolio} variable to 0
   */
  const handleClosePopup = () => {
    setOpenPortfolio(0);
  };

  return (
    <section id="portfolio" className="section page-split">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="bg-holder float-left">
          <div className="split-color"></div>
        </div>
        <div className="sticky-spacer">
          <div className="section-title-holder float-left portfolio-title-fix-className">
            <div className="section-top-image">
              <img src={num02} alt="" />
            </div>
            <h2
              className="entry-title"
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(portfolioData.into),
              }}
            />
            <p
              className="page-desc"
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(portfolioData.into2),
              }}
            />
          </div>
        </div>

        <div className="section-content-holder float-right">
          <div className="content-wrapper">
            <div id="portfolio-wrapper" className="relative">
              {portfolioItem === 0 ? (
                <>
                  <div id="portfolio-grid" style={{ marginBottom: '100px' }}>
                    {portfolioData.portfolioItems.map((item, i) => (
                      <div
                        key={'portfolio-item-' + i}
                        className={`${item.className}`}>
                        <div
                          className="portfolio-item-box"
                          onClick={() => {
                            // according to action type we wil fire the function
                            if (
                              item?.action?.type === 'item' &&
                              typeof item?.action?.number === 'number'
                            ) {
                              handleOpenItem(item.action.number);
                            } else if (
                              item?.action?.type === 'popup' &&
                              typeof item?.action?.number === 'number'
                            ) {
                              handleOpenPopup(item.action.number);
                            }
                          }}>
                          <img src={images[i]} alt="" />
                          <div className="portfolio-item-info">
                            <p className="portfolio-title">
                              {item.description.text}
                            </p>
                            <p className="portfolio-desc">
                              {item.description.caption}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                // Portfolio items to be opened as a separate component
                <div className="portfolio-load-content-holder">
                  <div
                    className="close-icon"
                    role="button"
                    onClick={handlCloseItem}>
                    <img src={backArrow} alt="back arrow" />
                  </div>
                  {portfolioItem === 1 ? (
                    <PortfolioItem1 />
                  ) : portfolioItem === 2 ? (
                    <PortfolioItem2 />
                  ) : portfolioItem === 3 ? (
                    <PortfolioItem3 />
                  ) : (
                    <></>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="clear"></div>

        {/* Popups portfolio items */}
        <Popup
          open={openPortfolio !== 0}
          closeOnDocumentClick
          onClose={handleClosePopup}
          modal>
          <div className="my-popup">
            <div
              className="close-popup-btn"
              role="button"
              onClick={handleClosePopup}>
              <img src={closeIcon} alt="close icon" />
            </div>
            {openPortfolio === 1 ? (
              <div className="popup-image-box">
                <img src={portfolio4} alt="portfolio image" />
              </div>
            ) : openPortfolio === 2 ? (
              <div className="video-popup" onClick={close}>
                <iframe
                  src="https://player.vimeo.com/video/199192931"
                  width="640"
                  allow="autoplay; fullscreen"></iframe>
              </div>
            ) : (
              <></>
            )}
          </div>
        </Popup>
      </div>
    </section>
  );
}

export default Portfolio;
