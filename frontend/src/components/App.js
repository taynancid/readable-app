import React, { Component, Fragment } from "react";
import "./App.css";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import MainPage from "./MainPage";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostPage from "./PostPage";
import Footer from "./Footer";

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.props.dispatch(handleInitialData()).then(() => {
      this.setState(prevState => {
        return {
          ...prevState,
          loading: false
        };
      });
    });
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {this.state.loading === true ? null : (
            <div>
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
                render={props => {
                  return (
                    <Fragment>
                      <NavBar />
                      <PostPage {...props} />
                      <Footer />
                    </Fragment>
                  );
                }}
              />
            </div>
          )}
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
