// Functions
import { markdownToHTML } from '../../utils/converter';

// Data
import mileData from '../../data/milestones.json';

// -----------

function Milestones() {
  return (
    <section id="milestones" className="section full-width">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          <ul className="milestones-holder">
            {mileData.milestones.map((stone, i) => (
              <li className="milestone" key={'milestone-' + i}>
                <p className="milestone-num">{stone.num}</p>
                <p
                  className="milestone-text"
                  dangerouslySetInnerHTML={{
                    __html: markdownToHTML(stone.text),
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="clear"></div>
      </div>
    </section>
  );
}

export default Milestones;
