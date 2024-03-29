import Zmage from "react-zmage";
import Fade from "react-reveal";

import { useTranslation } from "react-i18next";

import './style.css';

export default function Portfolio(props) {
  const { t } = useTranslation();

  const projects = props.data.projects.map(function (projects) {
    let projectImage = "images/portfolio/" + projects.image;

    return (
      <div key={projects.title} className="columns portfolio-item">
        <a href={projects.url}>
          <div className="item-wrap">
            <p className="category">{projects.category}</p>
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </a>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>{t("portfolio.title")}</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
