import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";

class Post extends Component {
  handleVote = e => {
    //todo
  };

  render() {
    const { post } = this.props;

    const { timestamp, body, title, author, commentCount, voteScore } = post;

    return (
      <div className="box" style={{ width: "100%" }}>
        <article className="media">
          <div className="media-content">
            <div className="content">
              <strong className="title">{title}</strong>
              <small className="level">{author}</small>
              <small className="level">{formatDate(timestamp)}</small>
              <hr />
              <br />
              {body}
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item" aria-label="voteUp">
                  <span className="icon is-small">
                    <i className="far fa-thumbs-up" />
                  </span>
                  {voteScore > 0 && (
                    <p className="level-item">{`+${voteScore}`}</p>
                  )}
                </a>
                <a className="level-item" aria-label="voteDown">
                  <span className="icon is-small">
                    <i className="far fa-thumbs-down" />
                  </span>
                  {voteScore < 0 && (
                    <p className="level-item">{`${voteScore}`}</p>
                  )}
                </a>
                <a className="level-item" aria-label="comments">
                  <span className="icon is-small">
                    <i className="fas fa-comments" />
                  </span>
                  {commentCount > 0 && (
                    <p className="level-item">{commentCount}</p>
                  )}
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    );
  }
}

function mapStateToProps({ posts }, { id }) {
  const post = posts[id];
  return {
    post: post
  };
}

export default connect(mapStateToProps)(Post);
