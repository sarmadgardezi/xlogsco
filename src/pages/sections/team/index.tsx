import { useState } from 'react';

// UI Components
import Member1 from './members/member1';
import Member2 from './members/member2';
import Member3 from './members/member3';
import Member4 from './members/member4';
import Member5 from './members/member5';
import Member6 from './members/member6';

// Images
import sec06Left from '../../../assets/images/sections/06_left.png';
import member01 from '../../../assets/images/team/team_01_large.jpg';
import member02 from '../../../assets/images/team/team_02_large.jpg';
import member03 from '../../../assets/images/team/team_03_large.jpg';
import member04 from '../../../assets/images/team/team_04_large.jpg';
import member05 from '../../../assets/images/team/team_05_large.jpg';
import member06 from '../../../assets/images/team/team_06_large.jpg';
// --> Icon Images
import backArrow from '../../../assets/images/close-left-arrow.png';

// Data
import teamData from '../../../data/team.json';

// ------------

function Team() {
  const images: string[] = [
    member01,
    member02,
    member03,
    member04,
    member05,
    member06,
  ];

  const [memberPage, setMemberPage] = useState<number>(0);

  const handleOpenMemberPage = (order: number) => {
    const element: HTMLElement | null = document.getElementById('team-holder');
    if (element) {
      element.scrollIntoView();
    }
    setMemberPage(order);
  };

  /**
   * Close Opened portfolio item and show the portfolio grid images
   */
  const handlCloseItem = () => {
    setMemberPage(0);
  };

  return (
    <section id="team" className="section page-split">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="bg-holder float-left">
          <div className="split-color"></div>
        </div>
        <div className="sticky-spacer">
          <div className="section-title-holder float-left">
            <div className="section-top-image">
              <img src={sec06Left} alt="sec 06 left" />
            </div>
            <h2
              className="entry-title"
              dangerouslySetInnerHTML={{ __html: teamData.intro }}
            />
            <p
              className="page-desc"
              dangerouslySetInnerHTML={{ __html: teamData.intro2 }}
            />
          </div>
        </div>

        <div className="section-content-holder float-right">
          <div className="content-wrapper">
            <div id="team-holder">
              {memberPage === 0 ? (
                <ul className="member-holder-wrapper">
                  {teamData.members.map((member, i) => (
                    <li
                      id="team-member-1"
                      className="member-holder one_half"
                      key={'team-member-' + member.order}>
                      <a
                        className="img-link ajax-member-content"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleOpenMemberPage(member.order)}>
                        <img
                          className="attachment-post-thumbnail"
                          src={images[i]}
                          alt=""
                        />
                        <div className="member-mask">
                          <div className="member-info-holder">
                            <p className="member-name">{member.info.name}</p>
                            <p className="member-position">
                              {member.info.position}
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="team-load-content-holder">
                  <div
                    className="close-icon"
                    role="button"
                    onClick={handlCloseItem}>
                    <img src={backArrow} alt="back arrow" />
                  </div>
                  {memberPage === 1 ? (
                    <Member1 />
                  ) : memberPage === 2 ? (
                    <Member2 />
                  ) : memberPage === 3 ? (
                    <Member3 />
                  ) : memberPage === 4 ? (
                    <Member4 />
                  ) : memberPage === 5 ? (
                    <Member5 />
                  ) : memberPage === 6 ? (
                    <Member6 />
                  ) : (
                    <></>
                  )}
                </div>
              )}
              <div className="clear"></div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </section>
  );
}

export default Team;
