import React, { Component } from "react";
import "./App.css";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import { handleAddPost } from "../actions/posts";
import NavBar from "./NavBar";
import DashBoard from "./DashBoard";
import OptionsRow from "./OptionsRow";

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
      <div>
        <NavBar />
        <OptionsRow />
        <DashBoard />
      </div>
    );
  }
}

export default connect()(App);
