import React, { Component } from "react";
import { connect } from "react-redux";
import "bulma/css/bulma.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    const { categories } = this.props;
    return (
      <nav
        className="navbar is-primary is-transparent is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              className="navbar-item fab fa-forumbee"
              to="/"
              exact
              activeClassName="active"
            >
              <h1
                className="navbar-item"
                width="112"
                height="28"
                style={{ fontFamily: "Bungee Inline" }}
              >
                Readable
              </h1>
            </NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-menu">
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
                        key={category}
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
