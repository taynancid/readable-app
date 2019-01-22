import React, { Component } from "react";
import { connect } from "react-redux";
import "bulma/css/bulma.css";
import Post from "./Post";

class Dashboard extends Component {
  state = {
    sortType: "timestamp"
  };

  render() {
    const { postsId } = this.props;
    return (
      <div className="container">
        {postsId.length > 0 ? (
          <ul>
            {this.props.postsId.map(id => (
              <li className="level" key={id}>
                <div className="level-item" style={{ flexShrink: 1 }}>
                  <Post id={id} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="level">
            <div className="level-item">
              <strong>This Category Has No Posts</strong>
            </div>
          </div>
        )}
      </div>
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
        if (sortType === "mostRecent") {
          return posts[b].timestamp - posts[a].timestamp;
        } else if (sortType === "leastRecent") {
          return posts[a].timestamp - posts[b].timestamp;
        } else {
          return posts[b].voteScore - posts[a].voteScore;
        }
      })
  };
}

export default connect(mapStateToProps)(Dashboard);
