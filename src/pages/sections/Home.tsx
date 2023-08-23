// Images
import helloImg from '../../assets/images/home/hello.png';
import heroMain from '../../assets/images/home/hero_main.jpg';

// ---------------

function Home() {
  return (
    <section
      id="home"
      className="section full-screen full-width"
      style={{
        backgroundImage: `url(${heroMain})`,
      }}>
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          <img src={helloImg} alt="hello" className="center-relative block" />
          <h1 className="big-text center">
            We Craft Awesome Web And
            <br />
            &nbsp;Graphic Design Solutions
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Home;
