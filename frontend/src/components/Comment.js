import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { handleVoteComment } from "../actions/comments";

class Comment extends Component {
  handleVoteUp = e => {
    const { dispatch, id } = this.props;

    dispatch(handleVoteComment(id, "upVote"));
  };

  handleVoteDown = e => {
    const { dispatch, id } = this.props;

    dispatch(handleVoteComment(id, "downVote"));
  };

  handleDelete = e => {};

  render() {
    const { author, body, timestamp, voteScore } = this.props.comment;
    return (
      <section className="section">
        <div className="container" style={{ width: "60%" }}>
          <div className="box">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{author}</strong>
                    {"     "}
                    <small>{formatDate(timestamp)}</small>
                    <br />
                    {body}
                  </p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left">
                    <a
                      className="level-item"
                      aria-label="voteUp"
                      onClick={this.handleVoteUp}
                    >
                      <span className="icon is-small">
                        <i value="upVote" className="far fa-thumbs-up" />
                      </span>
                      {voteScore > 0 && (
                        <p className="level-item">{`+${voteScore}`}</p>
                      )}
                    </a>
                    <a
                      className="level-item"
                      aria-label="voteDown"
                      onClick={this.handleVoteDown}
                    >
                      <span className="icon is-small">
                        <i value="downVote" className="far fa-thumbs-down" />
                      </span>
                      {voteScore < 0 && (
                        <p className="level-item">{`${voteScore}`}</p>
                      )}
                    </a>
                  </div>
                </nav>
              </div>
              <div class="media-right">
                <button class="delete" />
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps({ comments }, { id }) {
  const comment = comments[id];
  return {
    comment
  };
}

export default connect(mapStateToProps)(Comment);
