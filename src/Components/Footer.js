import Fade from "react-reveal";

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <Fade bottom>
          <ul className="copyright">
            <li>&copy; Copyright 2021 Gabriele Jandres</li>
          </ul>
        </Fade>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}