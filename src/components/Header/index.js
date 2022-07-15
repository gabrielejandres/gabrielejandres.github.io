import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import LanguageSelect from "../LanguageSelect/index";
import { useTranslation } from "react-i18next";
import hand from "../../assets/img/hand.svg";

import './style.css';

export default function Header(props) {
  const { t } = useTranslation();

  const behance = props.data.behance;
  const github = props.data.github;
  const name = props.data.name;
  const description = t("header.description");

  const config = {
    num: [20, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "center",
    cross: "dead",
    random: 15,
    type: "cobweb",
    g: 5,
    onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(
        particle.p.x,
        particle.p.y,
        particle.radius * 2,
        particle.radius * 2
      );
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    },
  };

  return (
    <header id="home">
      <ParticlesBg
        num={40}
        color="#480048"
        config={config}
        type="cobweb"
        bg={true}
      />

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              {t("header.home")}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              {t("header.about")}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#resume">
              {t("header.experience")}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#tech">
              {t("header.technologies")}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#portfolio">
              {t("header.projects")}
            </a>
          </li>

          <li>
            <LanguageSelect />
          </li>
        </ul>
      </nav>

      <div className="banner">
        <div className="row">
        <div className="banner-text">
          <Fade bottom>
            <h1 className="responsive-headline">{name}</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h3>{description}.</h3>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              <a href={github} className="button btn github-btn">
                <i className="fa fa-github"></i>Github
              </a>
              <a href={behance} className="button btn behance-btn">
                <i className="fa fa-dribbble"></i>Behance
              </a>
            </ul>
          </Fade>
        </div>
        <div>
          <img src={hand} alt="Coding"/>
        </div>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}
