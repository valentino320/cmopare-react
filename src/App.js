import React, { Component } from "react";
import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize";
import "material-icons/iconfont/material-icons.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import initFontAwesome from "./components/InitFontAwesome";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Home from "./components/Home";
import Faq from "./components/Faq";
import About from "./components/About";
import Features from "./components/Features";
import "./App.css";
import { Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, { edge: "left" });
    });
  }
  // componentDidMount() {
  //   // Autoinitialize all the things
  //   M.AutoInit();
  // }
  render() {
    return (
      <div className="App">
        <Header />

        <Route exact={true} path="/" component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/about" component={About} />
        <Route path="/features" component={Features} />

        <Footer />
      </div>
    );
  }
}

export default App;
