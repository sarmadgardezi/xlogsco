// Images
import member03 from '../../../../assets/images/team/team_03_large.jpg';

// -------------------

function Member3() {
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
            <img src={member03} alt="team member 03" />
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

export default Member3;
