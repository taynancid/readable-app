import React, { Component } from "react";
import "bulma/css/bulma.css";

class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar is-primary is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://localhost::3000">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
                alt=""
              />
            </a>
          </div>
          <div className="navbar-end">
            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              href="#"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Category</a>
                  <div className="navbar-dropdown">
                    <a className="navbar-item">All</a>
                    <a className="navbar-item">React</a>
                    <a className="navbar-item">Redux</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
