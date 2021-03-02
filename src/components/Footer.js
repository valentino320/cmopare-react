import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer page-footer teal lighten-2">
        <div className="container">
          <div className="row">
            <div className="col s12 white-text">
              <div className="left">spiffy footer where you can put stuff</div>
              <div className="right-align">
                <a
                  target="blank"
                  href="https://en-gb.facebook.com/"
                  className=""
                >
                  <FontAwesomeIcon icon={faFacebook} size="3x" color="white" />
                </a>
                <a
                  target="blank"
                  href="https://twitter.com/?lang=en-gb"
                  className=""
                >
                  <FontAwesomeIcon icon={faTwitter} size="3x" color="white" />
                </a>
                <a target="blank" href="https://github.com/" className="">
                  <FontAwesomeIcon icon={faGithub} size="3x" color="white" />
                </a>
              </div>
            </div>
          </div>
          <div className="center-align white-text">2021 &#169; visuAll</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
