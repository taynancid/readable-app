import React, { Component, Fragment } from "react";
import "./App.css";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import { handleAddPost } from "../actions/posts";
import NavBar from "./NavBar";
import DashBoard from "./DashBoard";
import OptionsRow from "./OptionsRow";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
    let newPost = {
      body: "novo post",
      author: "novo autor",
      title: "novo titulo",
      category: "react"
    };
    this.props.dispatch(handleAddPost(newPost));
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
                  <OptionsRow />
                  <DashBoard {...props} />
                </Fragment>
              )}
            />
          ))}
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
