import React, { Component } from "react";
import "bulma/css/bulma.css";
import { connect } from "react-redux";
import { handleAddPost } from "../actions/posts";

class NewPostModal extends Component {
  state = {
    title: "",
    author: "",
    category: "",
    body: ""
  };

  handleTitleChange = e => {
    const text = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      title: text
    }));
  };

  handleAuthorChange = e => {
    const text = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      author: text
    }));
  };

  handleTextChange = e => {
    const text = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      body: text
    }));
  };

  handleCatChange = e => {
    const text = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      category: text
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, author, category, body } = this.state;

    const { dispatch, closeModal } = this.props;

    dispatch(handleAddPost({ title, author, category, body }));

    closeModal();
  };

  render() {
    const { categories, closeModal } = this.props;
    const { title, author, category, body } = this.state;
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={closeModal} />
        <div className="modal-card">
          <header className="modal-card-head has-text-centered">
            <p className="modal-card-title">New Post</p>
            <button className="delete" onClick={closeModal} />
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={this.handleTitleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Author</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Author"
                  value={author}
                  onChange={this.handleAuthorChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Category:</label>
              <div className="select">
                <select value={category} onChange={this.handleCatChange}>
                  {categories.map(category => (
                    <option value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <label className="label">Post</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="New Post"
                  value={body}
                  onChange={this.handleTextChange}
                />
              </div>
            </div>
          </section>
          <div
            className="level modal-card-foot"
            style={{ justifyContent: "space-between" }}
          >
            <a className="button" onClick={closeModal}>
              Cancel
            </a>
            <a className="button is-primary" onClick={this.handleSubmit}>
              Add
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ categories }, { closeModal }) {
  let catArray = [];
  for (const category in categories) {
    catArray.push(categories[category].name);
  }
  console.log(catArray);
  return {
    categories: catArray,
    closeModal
  };
}

export default connect(mapStateToProps)(NewPostModal);
