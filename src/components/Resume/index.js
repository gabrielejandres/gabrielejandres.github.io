import Slide from "react-reveal";

import { useTranslation } from "react-i18next";

import './style.css';

export default function Resume() {
  const { t } = useTranslation();
  const educationData = t("resume.education.data",  { returnObjects: true });
  const workData = t("resume.work.data",  { returnObjects: true });
  const extraData = t("resume.extra.data",  { returnObjects: true });

  const education = educationData.map(function (education) {
    return (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree} <span>&bull;</span>
          <em className="date">{education.graduated}</em>
        </p>
        <ul className="activities-list">
          {education.description.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  });

  const work = workData.map(function (work) {
    return (
      <div key={work.title}>
        {!work.ignoreCompany && <h3>{work.company}</h3>}
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        <ul className="activities-list">
          {work.description.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  });

  const extra = extraData.map(function (extra) {
    return (
      <div key={extra.title}>
        <a href={extra.credential}>
          <h3>{extra.title}</h3>
        </a>
        <p className="info">
          {extra.dispatcher}
          <span>&bull;</span> <em className="date">{extra.date}</em>
        </p>
      </div>
    );
  });

  return (
    <section id="resume">
      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>{t("resume.education.title")}</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>{t("resume.work.title")}</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>{t("resume.extra.title")}</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{extra}</div>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}