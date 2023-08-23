import { useRef, useEffect, useState } from 'react';

// Images
import sec05Left from '../../assets/images/sections/05_left.png';

// Functions
import { markdownToHTML } from '../../utils/converter';

// Data
import skillsData from '../../data/skills.json';

// ------------------

function Skills() {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState<number[]>(
    new Array(skillsData.skillsProgress.length).fill(0)
  );

  useEffect(() => {
    if (progressBarRef.current) {
      const progressBarYPosition =
        progressBarRef.current.getBoundingClientRect().top + window.scrollY;
      const handleScroll = () => {
        if (window.scrollY >= progressBarYPosition) {
          setProgress(
            skillsData.skillsProgress.map((progress) => progress.percentage)
          );
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [progress]);

  return (
    <section id="skills" className="section page-split">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="bg-holder float-left">
          <div className="split-color"></div>
        </div>
        <div className="sticky-spacer">
          <div className="section-title-holder float-left">
            <div className="section-top-image">
              <img src={sec05Left} alt="sec 05 left" />
            </div>
            <h2
              className="entry-title"
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(skillsData.intro),
              }}
            />
            <p
              className="page-desc"
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(skillsData.intro2),
              }}
            />
          </div>
        </div>
        <div className="section-content-holder float-right">
          <div className="content-wrapper">
            <div
              className="info-text"
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(skillsData.descText),
              }}
            />
            <p>&nbsp;</p>

            <div className="skills-holder" ref={progressBarRef}>
              {skillsData.skillsProgress.map((prog, i) => (
                <div className="skill-holder" key={'skills-progress-' + i}>
                  <div className="skill-percent">{prog.percentage}%</div>
                  <div className="skill-text">
                    <span>{prog.title}</span>
                    <div className="skill">
                      <div
                        className="skill-fill"
                        // data-fill="75%"
                        style={{ width: `${progress[i]}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </section>
  );
}

export default Skills;
