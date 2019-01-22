import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import {
  handleVoteComment,
  handleDeleteComment,
  handleEditComment
} from "../actions/comments";

class Comment extends Component {
  state = {
    editMode: false,
    newAuthor: "",
    newBody: ""
  };

  handleResetValues = e => {
    const { body, author } = this.props.comment;

    this.setState(prevState => {
      return {
        ...prevState,
        newAuthor: author,
        newBody: body
      };
    });
  };

  toggleEditMode = e => {
    this.setState(prevState => {
      return {
        ...prevState,
        editMode: !prevState.editMode
      };
    });
  };

  componentDidMount() {
    this.handleResetValues();
  }

  handleVote = e => {
    const { dispatch, id } = this.props;
    console.log(e.target.id);
    if (e.target.id === "upVote") {
      dispatch(handleVoteComment(id, "upVote"));
    } else if (e.target.id === "downVote") {
      dispatch(handleVoteComment(id, "downVote"));
    }
  };

  handleDelete = e => {
    const { dispatch, id } = this.props;

    dispatch(handleDeleteComment(id));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { newAuthor, newBody } = this.state;

    const { dispatch, id } = this.props;

    dispatch(handleEditComment({ id, author: newAuthor, body: newBody }));

    this.toggleEditMode();
  };

  handleCancel = e => {
    this.handleResetValues();
    this.toggleEditMode();
  };

  handleTextChange = e => {
    const text = e.target.value;

    if (e.target.id === "author") {
      this.setState(prevState => {
        return {
          ...prevState,
          newAuthor: text
        };
      });
    } else if (e.target.id === "body") {
      this.setState(prevState => {
        return {
          ...prevState,
          newBody: text
        };
      });
    }
  };

  render() {
    const { author, body, timestamp, voteScore } = this.props.comment;
    const { editMode, newAuthor, newBody } = this.state;
    return (
      <div className="container" style={{ width: "60%", padding: "10px" }}>
        {editMode === false ? (
          <div className="box">
            <article className="media">
              <div className="media-content">
                <div className="content">
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
                      id="upVote"
                      className="level-item"
                      aria-label="voteUp"
                      onClick={this.handleVote}
                    >
                      <span className="icon is-small">
                        <i id="upVote" className="far fa-thumbs-up" />
                      </span>
                      {voteScore > 0 && (
                        <p className="level-item">{`+${voteScore}`}</p>
                      )}
                    </a>
                    <a
                      className="level-item"
                      aria-label="voteDown"
                      onClick={this.handleVote}
                    >
                      <span className="icon is-small">
                        <i id="downVote" className="far fa-thumbs-down" />
                      </span>
                      {voteScore < 0 && (
                        <p className="level-item">{`${voteScore}`}</p>
                      )}
                    </a>
                    <a
                      className="level-item"
                      aria-label="voteDown"
                      onClick={this.toggleEditMode}
                    >
                      <span className="icon is-small">
                        <i className="far fa-edit" />
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
              <div className="media-right">
                <button className="delete" onClick={this.handleDelete} />
              </div>
            </article>
          </div>
        ) : (
          <div className="box">
            <div className="field">
              <label className="label">Author</label>
              <div className="control">
                <input
                  id="author"
                  className="input"
                  type="text"
                  placeholder="Author"
                  value={newAuthor}
                  onChange={this.handleTextChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Post</label>
              <div className="control">
                <textarea
                  id="body"
                  className="textarea"
                  placeholder="New Post"
                  value={newBody}
                  onChange={this.handleTextChange}
                />
              </div>
            </div>
            <div className="level" style={{ justifyContent: "space-between" }}>
              <a className="button" onClick={this.handleCancel}>
                Cancel
              </a>
              <a className="button is-primary" onClick={this.handleSubmit}>
                Save
              </a>
            </div>
          </div>
        )}
      </div>
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
