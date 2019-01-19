import React, { Component } from "react";
import "./App.css";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import { handleAddPost, handleUpdatePost } from "../actions/posts";
import NavBar from "./NavBar";
import DashBoard from "./DashBoard";

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

    console.log(newPost);
    this.props.dispatch(handleUpdatePost(newPost));
  }

  render() {
    return (
      <div>
        <NavBar />
        <DashBoard />
      </div>
    );
  }
}

export default connect()(App);
