import planetImg from '../../assets/planet.png'
import "./Hero.css";

function Hero({ onExploreClick, onContactClick }) {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title">
            Explore Our Solar System{" "}
            <span className="hero__title-accent">Through Data</span>
          </h1>
          <p className="hero__subtitle">
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down the
            solar system in a clear, data-driven way.
          </p>
          <div className="hero__ctas">
            <button className="btn btn--primary" onClick={onExploreClick}>
              Explore the Data
            </button>
            <button className="btn btn--outline" onClick={onContactClick}>
              Contact Us
            </button>
          </div>
        </div>

        <div className="hero__image-wrapper">
          <div className="hero__planet-glow" aria-hidden="true"></div>
          <img
            src={planetImg}
            alt="Planet Earth as seen from space"
            className="hero__planet-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
