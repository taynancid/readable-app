import React, { Component, Fragment } from "react";
import "./App.css";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import MainPage from "./MainPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostPage from "./PostPage";
import Footer from "./Footer";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          {["/:category", "/"].map((path, index) => (
            <Route
              path={path}
              exact
              key={index}
              render={props => (
                <Fragment>
                  <NavBar />
                  <MainPage {...props} />
                  <Footer />
                </Fragment>
              )}
            />
          ))}
          <Route
            path="/:category/:id"
            exact
            render={props => (
              <Fragment>
                <NavBar />
                <PostPage {...props} />
                <Footer />
              </Fragment>
            )}
          />
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
