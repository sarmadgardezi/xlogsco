// Images
import member06 from '../../..//../assets/images/team/team_06_large.jpg';

// -------------------

function Member6() {
  return (
    <div className="">
      <div className="">
        <div className="member-content">
          <div className="one_half">
            <div className="info-text">
              Two ghostly white figures in coveralls and helmets are soflty
              dancing.
            </div>

            <p>&nbsp;</p>
            <p>
              Terry Jackobs, CEO very small stage in a vast cosmic arena great
              turbulent clouds ready so encyclopaedia galactica star stuff
              harvesting star light the carbon in our apple pies tasty feel.
            </p>
          </div>

          <div className="one_half last">
            <img src={member06} alt="team member 06" />
          </div>
          <div className="clear"></div>
          <p className="video-popup">
            <iframe
              src="https://player.vimeo.com/video/199192931"
              allowFullScreen></iframe>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Member6;
