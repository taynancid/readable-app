import React, { Component } from "react";
import { connect } from "react-redux";
import "bulma/css/bulma.css";
import Post from "./Post";

class Dashboard extends Component {
  state = {
    sortType: "category"
  };

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

function mapStateToProps({ posts }, props) {
  const { sortType, category } = props;

  return {
    postsId: Object.keys(posts)
      .filter(id => posts[id].deleted === false)
      .filter(id => (category ? posts[id].category === category : id))
      .sort((a, b) => {
        if (sortType === "timestamp") {
          return posts[b].timestamp - posts[a].timestamp;
        } else {
          return posts[b].voteScore - posts[a].voteScore;
        }
      })
  };
}

export default connect(mapStateToProps)(Dashboard);
