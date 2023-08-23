import { Fragment, useState } from 'react';

// Plugins
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// Images
import sec03Right from '../../assets/images/sections/03_right.png';
import videoImg from '../../assets/images/about/video_img.jpg';
import playBtn from '../../assets/images/about/play_btn.png';
import closeIcon from '../../assets/images/close.png';

// Functions and Hooks
import { markdownToHTML } from '../../utils/converter';

// Data
import aboutData from '../../data/about.json';

// -------------

function About() {
  const [openVideoPopup, setOpenVideoPopup] = useState<boolean>(false);

  const handleOpenVideoPopup = () => {
    setOpenVideoPopup(true);
  };

  const handleCloseVideoPopup = () => {
    setOpenVideoPopup(false);
  };

  return (
    <section id="about" className="section page-split">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="bg-holder float-right">
          <div className="split-color"></div>
        </div>
        <div className="sticky-spacer">
          <div className="section-title-holder float-right">
            <div className="section-top-image">
              <img src={sec03Right} alt="sec 03 right" />
            </div>
            <h2
              className="entry-title"
              dangerouslySetInnerHTML={{ __html: aboutData.intro }}
            />
            <p
              className="page-desc"
              dangerouslySetInnerHTML={{ __html: aboutData.intro2 }}
            />
          </div>
        </div>

        <div className="section-content-holder float-left">
          <div className="content-wrapper">
            <div
              className="info-text"
              dangerouslySetInnerHTML={{ __html: aboutData.description }}
            />
            <p>&nbsp;</p>
            <a className="video-popup-holder" onClick={handleOpenVideoPopup}>
              <img className="thumb" src={videoImg} alt="" />
              <img className="popup-play" src={playBtn} alt="Play" />
            </a>
            <p>&nbsp;</p>

            <div className="one_half">
              {aboutData.paragraphs.map((parg, i) => (
                <Fragment key={'about-parg-' + i}>
                  <p
                    dangerouslySetInnerHTML={{ __html: markdownToHTML(parg) }}
                  />
                  {aboutData.paragraphs.length > i + 1 && <p>&nbsp;</p>}
                </Fragment>
              ))}
            </div>
            <div
              className="one_half last"
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(aboutData.leftParagraph),
              }}
            />
            <div className="clear"></div>
          </div>
        </div>
        <div className="clear"></div>
      </div>

      {/* Video Popup */}
      <Popup
        open={openVideoPopup}
        closeOnDocumentClick
        onClose={handleCloseVideoPopup}
        modal>
        <div className="my-popup">
          <div
            className="close-popup-btn"
            role="button"
            onClick={handleCloseVideoPopup}>
            <img src={closeIcon} alt="close icon" />
          </div>
          <div className="video-popup" onClick={close}>
            <iframe
              src="https://www.youtube.com/embed/QC8iQqtG0hg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        </div>
      </Popup>
    </section>
  );
}

export default About;
