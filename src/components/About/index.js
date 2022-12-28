import Fade from "react-reveal";

import { useTranslation } from "react-i18next";

import './style.css';

export default function About(props) {
  const { t } = useTranslation();

  const profilepic = "images/" + props.data.image;
  const email = props.data.email;
  const bio = t("about.bio");

  const networks = props.data.social.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className={network.className} aria-hidden="true"></span>
        </a>
      </li>
    );
  });

  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Gabriele Jandres"
            />
          </div>
          <div className="nine columns main-col">
            <h2>{t("about.title")}</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>{t("about.contact")}</h2>
                <p className="address">
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <div className="icons">
                  <ul>{networks}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}