import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { handleEditPost, handleDeletePost } from "../actions/posts";

class Post extends Component {
  state = {
    editMode: false,
    newTitle: "",
    newBody: ""
  };

  handleVote = e => {
    //todo
  };

  handleTitleChange = e => {
    const text = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      newTitle: text
    }));
  };

  handleTextChange = e => {
    const text = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      newBody: text
    }));
  };

  toggleEditMode = e => {
    this.setState(prevState => {
      return {
        ...prevState,
        editMode: !prevState.editMode
      };
    });
  };

  deletePost = e => {
    const { dispatch, id } = this.props;
    dispatch(handleDeletePost(id));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { newTitle, newBody } = this.state;

    const { dispatch, id } = this.props;

    dispatch(handleEditPost({ id, title: newTitle, body: newBody }));

    this.toggleEditMode();
  };

  render() {
    const { post } = this.props;

    const { editMode, newTitle, newBody } = this.state;

    const { timestamp, body, title, author, commentCount, voteScore } = post;

    return (
      <div className="box" style={{ width: "100%" }}>
        {editMode === false ? (
          <article className="media">
            <div className="media-content">
              <div className="content">
                <strong className="title level">
                  {title}
                  <div className="dropdown is-hoverable is-center">
                    <div className="dropdown-trigger">
                      <a
                        className="icon"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu6"
                      >
                        <span className="icon is-small">
                          <i className="fas fa-ellipsis-v" aria-hidden="true" />
                        </span>
                      </a>
                    </div>
                    <div
                      className="dropdown-menu"
                      id="dropdown-menu6"
                      role="menu"
                    >
                      <div className="dropdown-content">
                        <div className="dropdown-item">
                          <a onClick={this.toggleEditMode}>
                            <span className="icon">
                              <i className="far fa-edit" />
                            </span>
                            <span>Edit</span>
                          </a>
                        </div>
                        <div className="dropdown-item">
                          <a onClick={this.deletePost}>
                            <span className="icon">
                              <i className="fas fa-trash-alt" />
                            </span>
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </strong>
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
        ) : (
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Title"
                  value={newTitle}
                  onChange={this.handleTitleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Post</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="New Post"
                  value={newBody}
                  onChange={this.handleTextChange}
                />
              </div>
            </div>
            <div className="level" style={{ justifyContent: "space-between" }}>
              <a className="button" onClick={this.toggleEditMode}>
                Cancel
              </a>
              <a className="button is-primary" onClick={this.handleSubmit}>
                Save
              </a>
            </div>
          </section>
        )}
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
