import React, { Component } from "react";
import Slide from "react-reveal";

class Tech extends Component {
  render() {
    if (!this.props.data) return null;

    const skills = this.props.data.map((skills) => {
      return (
        <div className="card">
          <img className="card-img" src={skills.image} alt={skills.name} />
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
              <div className="cards">{skills}</div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Tech;
