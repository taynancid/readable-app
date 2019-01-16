import React, { Component } from "react";
import "./App.css";
import * as API from "./api";

class App extends Component {
  componentDidMount() {
    // PARAMS:
    // id - UUID should be fine, but any unique id will work
    // timestamp - timestamp in whatever format you like, you can use Date.now() if you like
    // title - String
    // body - String
    // author - String
    // category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
    let tempID = Math.random()
      .toString(36)
      .substr(-8);
    let tempDate = Date.now();

    let post = {
      id: tempID,
      timestamp: tempDate,
      title: "bora nessa",
      body: "vem papai",
      author: "eu",
      category: "react"
    };

    API.addPost(post).then(data => console.log(data));
    // API.votePost(tempID, "upVote").then(data => console.log(data));
    API.getAllPosts().then(data => console.log(data));
  }

  render() {
    return <div>INITIAL COMMIT</div>;
  }
}

export default App;
