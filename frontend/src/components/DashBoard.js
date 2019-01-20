import React, { Component } from "react";
import { connect } from "react-redux";
import "bulma/css/bulma.css";
import Post from "./Post";

class Dashboard extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <ul>
            {this.props.postsId.map(id => (
              <li className="level" key={id}>
                <div className="level-item">
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
    postsId: Object.keys(posts)
      .filter(id => posts[id].deleted === false)
      .sort((a, b) => {
        return posts[b].timestamp - posts[a].timestamp;
      })
  };
}

export default connect(mapStateToProps)(Dashboard);
