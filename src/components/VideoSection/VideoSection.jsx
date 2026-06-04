import videoSrc from "../../assets/solar.mp4";
import "./VideoSection.css";

function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-section__container container">
        <div className="video-section__video-wrapper">
          <video
            className="video-section__video"
            autoPlay
            muted
            loop
            playsInline
            poster="https://anurella.github.io/images/earth.webp"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-section__play-btn" aria-hidden="true">
            <span className="video-section__play-icon">&#9654;</span>
          </div>
        </div>

        <div className="video-section__content">
          <h2 className="video-section__title">
            How Planetary Data Helps Us Understand Space
          </h2>
          <p className="video-section__text">
            Planetary science goes beyond images. Comparing{" "}
            <strong className="video-section__keyword">mass</strong>,{" "}
            <strong className="video-section__keyword">diameter</strong>,{" "}
            <strong className="video-section__keyword">gravity</strong>, and{" "}
            <strong className="video-section__keyword">density</strong>, we gain
            insight into how planets form, behave, and interact within the solar
            system.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
