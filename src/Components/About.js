import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const email = this.props.data.email;
    const phone = this.props.data.phone;

    const networks = this.props.data.social.map(function (network) {
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
              <h2>Sobre mim</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contato</h2>
                  <p className="address">
                    <span>{email}</span>
                    <br />
                    <span>{phone}</span>
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
}

export default About;
