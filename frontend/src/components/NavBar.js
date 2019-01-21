import React, { Component } from "react";
import { connect } from "react-redux";
import "bulma/css/bulma.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    const { categories } = this.props;
    return (
      <nav
        className="navbar is-primary is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              className="navbar-item fas fa-igloo"
              to="/"
              exact
              activeClassName="active"
            />
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
                    {categories.map(category => (
                      <NavLink
                        className="navbar-item"
                        to={`/${category}`}
                        exact
                        activeClassName="active"
                      >
                        {category}
                      </NavLink>
                    ))}
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

function mapStateToProps({ categories }) {
  let catArray = [];
  for (const category in categories) {
    catArray.push(categories[category].name);
  }
  return {
    categories: catArray
  };
}

export default connect(mapStateToProps)(NavBar);
