import React, { Component } from "react";
import { connect } from "react-redux";
import "bulma/css/bulma.css";
import Post from "./Post";

class Dashboard extends Component {
  render() {
    return (
      <section class="section">
        <div class="container">
          <ul>
            {this.props.postsId.map(id => (
              <li class="level" key={id}>
                <div class="level-item">
                  <Post id={id} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

function mapStateToProps({ posts }) {
  return {
    postsId: Object.keys(posts).sort((a, b) => {
      return posts[b].timestamp - posts[a].timestamp;
    })
  };
}

export default connect(mapStateToProps)(Dashboard);
