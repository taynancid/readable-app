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
      <div class="box" style={{ width: "100%" }}>
        <article class="media">
          <div class="media-content">
            <div class="content">
              <strong class="title">{title}</strong>
              <small class="level">{author}</small>
              <small class="level">{formatDate(timestamp)}</small>
              <hr />
              <br />
              {body}
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="voteUp">
                  <span class="icon is-small">
                    <i class="far fa-thumbs-up" />
                  </span>
                  {voteScore > 0 && <p class="level-item">{`+${voteScore}`}</p>}
                </a>
                <a class="level-item" aria-label="voteDown">
                  <span class="icon is-small">
                    <i class="far fa-thumbs-down" />
                  </span>
                  {voteScore < 0 && <p class="level-item">{`${voteScore}`}</p>}
                </a>
                <a class="level-item" aria-label="comments">
                  <span class="icon is-small">
                    <i class="fas fa-comments" />
                  </span>
                  {commentCount > 0 && <p class="level-item">{commentCount}</p>}
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
