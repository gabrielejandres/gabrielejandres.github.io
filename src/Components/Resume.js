import Slide from "react-reveal";

export default function Resume(props) {
  if (!props.data) return null;

  const education = props.data.education.map(function (education) {
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

  const work = props.data.work.map(function (work) {
    return (
      <div key={work.company}>
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

  const extra = props.data.extra.map(function (extra) {
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
              <span>Formação</span>
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
              <span>Profissional</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Extras</span>
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