import React, { Component } from "react";
import "bulma/css/bulma.css";

class NavBar extends Component {
  render() {
    return (
      <nav
        class="navbar is-primary is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://localhost::3000">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>
          </div>
          <div class="navbar-end">
            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>

            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">Category</a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item">All</a>
                    <a class="navbar-item">React</a>
                    <a class="navbar-item">Redux</a>
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
