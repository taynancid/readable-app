import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import {
  handleEditPost,
  handleDeletePost,
  handleVotePost
} from "../actions/posts";
import { Link, Redirect } from "react-router-dom";

class Post extends Component {
  state = {
    toMainPage: false,
    editMode: false,
    newTitle: "",
    newBody: ""
  };

  componentDidMount() {
    this.handleResetValues();
  }

  handleVote = e => {
    const { dispatch, id } = this.props;
    const type = e.target.id;

    dispatch(handleVotePost(id, type));
  };

  handleTextChange = e => {
    const text = e.target.value;

    if (e.target.id === "newBody") {
      this.setState(prevState => ({
        ...prevState,
        newBody: text
      }));
    }

    if (e.target.id === "newTitle") {
      this.setState(prevState => ({
        ...prevState,
        newTitle: text
      }));
    }
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
    this.setState(prevState => {
      return {
        ...prevState,
        toMainPage: true
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { newTitle, newBody } = this.state;

    const { dispatch, id } = this.props;

    dispatch(handleEditPost({ id, title: newTitle, body: newBody }));

    this.toggleEditMode();
  };

  handleResetValues = () => {
    const { post } = this.props;

    this.setState(prevState => {
      return {
        ...prevState,
        newTitle: post.title,
        newBody: post.body
      };
    });
  };

  render() {
    if (this.state.toMainPage === true) {
      return <Redirect to="/" />;
    }

    const { post } = this.props;

    const { editMode, newTitle, newBody } = this.state;

    const {
      timestamp,
      body,
      title,
      author,
      commentCount,
      voteScore,
      category,
      id
    } = post;

    if (editMode === false) {
      return (
        <div className="box" style={{ width: "90%" }}>
          <article className="media">
            <div className="media-content">
              <div className="content">
                <h2>
                  <Link to={`/${category}/${id}`}>{title}</Link>
                </h2>
                <p>
                  <i
                    className="far fa-user-circle"
                    style={{ padding: "3px" }}
                  />
                  <small>{author}</small>
                  <i className="far fa-clock" style={{ padding: "3px" }} />
                  <small>{formatDate(timestamp)}</small>
                </p>
                <br />
                <p>{body}</p>
              </div>
              <hr />
              <nav className="level is-mobile">
                <div className="level-left">
                  <a
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
                  <a className="level-item" aria-label="comments">
                    <span className="icon is-small">
                      <i className="fas fa-comments" />
                    </span>
                    {commentCount > 0 && (
                      <p className="level-item" style={{ padding: "3px" }}>
                        {commentCount}
                      </p>
                    )}
                  </a>
                </div>
              </nav>
            </div>
            <div className="media-right">
              <div className="media-right">
                <div className="dropdown is-hoverable is-center">
                  <div className="dropdown-trigger">
                    <a
                      className="icon"
                      aria-haspopup="true"
                      aria-controls="dropdown-menu6"
                    >
                      <span className="icon">
                        <i
                          className="fas fa-ellipsis-v fa-xs"
                          aria-hidden="true"
                        />
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
              </div>
            </div>
          </article>
        </div>
      );
    }

    if (editMode === true) {
      return (
        <div className="box" style={{ width: "90%" }}>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  id="newTitle"
                  className="input"
                  type="text"
                  placeholder="Title"
                  value={newTitle}
                  onChange={this.handleTextChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Post</label>
              <div className="control">
                <textarea
                  id="newBody"
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
        </div>
      );
    }
  }
}

function mapStateToProps({ posts }, { id }) {
  const post = posts[id];
  return {
    post: post
  };
}

export default connect(mapStateToProps)(Post);
