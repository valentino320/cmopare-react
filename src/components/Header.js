import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav>
          <div className="nav-wrapper grey darken-4 py-2">
            <a href="/" className="brand-logo">
              MyCompany
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="">
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" className="">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/faq" className="">
                  FAQ
                </Link>
              </li>
              <li>
                <a className="waves-effect waves-light btn">
                  <i className="material-icons left">thumb_up</i>JOIN NOW
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
