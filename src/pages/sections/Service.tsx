import { Fragment } from 'react';

// Images
import sec01Left from '../../assets/images/sections/01_left.png';
import servIcon1 from '../../assets/images/services/icon_preciese.png';
import servIcon2 from '../../assets/images/services/icon_support.png';
import servIcon3 from '../../assets/images/services/icon_responsive.png';
import servIcon4 from '../../assets/images/services/icon_community.png';
import servIcon5 from '../../assets/images/services/icon_portfolio.png';
import servIcon6 from '../../assets/images/services/icon_store.png';

// Functions
import { markdownToHTML } from '../../utils/converter';

// Data
import serviceData from '../../data/service.json';

// -----------------------

function Service() {
  const images: string[] = [
    servIcon1,
    servIcon2,
    servIcon3,
    servIcon4,
    servIcon5,
    servIcon6,
  ];

  return (
    <section id="services" className="section page-split">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="bg-holder float-left">
          <div className="split-color"></div>
        </div>
        <div className="sticky-spacer">
          <div className="section-title-holder float-left">
            <div className="section-top-image">
              <img src={sec01Left} alt="01" />
            </div>
            <h2
              className="entry-title"
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(serviceData.into),
              }}
            />
            <p
              className="page-desc"
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(serviceData.into2),
              }}
            />
          </div>
        </div>

        <div className="section-content-holder float-right">
          <div className="content-wrapper">
            <div
              className="info-text"
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(serviceData.title),
              }}
            />
            <p>&nbsp;</p>

            {serviceData.servicesBoxes.map((serv, i) => (
              <Fragment key={'serv' + i}>
                <div className={serv.className}>
                  <div className="service-holder">
                    <div className="service-img">
                      <img src={images[i]} alt={serv.imageAltText} />
                    </div>
                    <div className="service-txt">
                      <h4>{serv.servTitle}</h4>
                      {serv.servDesc}
                    </div>
                  </div>
                </div>
                {serv.className.includes('last') && (
                  <div className="clear"></div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </section>
  );
}

export default Service;
