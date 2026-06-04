import teamMembers from "../../data/teamMembers";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__about">
          <div className="footer__logo">
            <span className="footer__logo-icon">✦</span>
            <span>About</span>
          </div>
          <p className="footer__about-text">
            We are Group 10 — a collaborative team of aspiring front-end
            developers building this solar system explorer as our capstone
            project for the{" "}
            <a
              href="https://tsacademyonline.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TS Academy
            </a>{" "}
            Frontend Development course.
          </p>
          <p className="footer__members">
            {teamMembers.map((member, index) => (
              <span key={member.name}>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {member.name.split(" ")[0]}
                </a>
                {index < teamMembers.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>

        <div className="footer__links-col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#planets">Planets</a>
            </li>
            <li>
              <a href="#data-table">Data Table</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer__links-col">
          <h3 className="footer__heading">About</h3>
          <ul className="footer__list">
            <li>
              <a
                href="https://amakandukwu.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amaka
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ifeomaokocha"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ifeoma
              </a>
            </li>
            <li>
              <a
                href="https://tsacademyonline.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TSAcademy
              </a>
            </li>
            <li>
              <a
                href="https://github.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
              >
                Group 10
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            &copy; {currentYear}{" "}
            <a
              href="https://github.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Group 10 &mdash; CAPSTONE PROJECT
            </a>
            . Built for{" "}
            <a
              href="https://tsacademyonline.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TS Academy
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
