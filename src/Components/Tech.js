import React, { Component } from "react";
import Slide from "react-reveal";

class Tech extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skills = this.props.data.map((skills) => {
      // const backgroundColor = this.getRandomColor();
      // const className = "bar-expand " + skills.name.toLowerCase();
      // const width = skills.level;

      return (
        // <li key={skills.name}>
        //   <span style={{ width, backgroundColor }} className={className}></span>
        //   <em>{skills.name}</em>
        // </li>

        <div className="card">
          <img className="card-img" src={skills.image} />
          <div className="card-body">
            <h4 className="card-title">{skills.name}</h4>
            <p className="card-subtitle">{skills.description}</p>
          </div>
        </div>
      );
    });

    return (
      <section id="tech">
        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Tecnologias</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>Algumas das tecnologias que já utilizei</p>

              <div className="cards">
                {skills}
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Tech;
