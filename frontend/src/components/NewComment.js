import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddComment } from "../actions/comments";

class NewComment extends Component {
  state = {
    author: "",
    body: ""
  };

  handleTextChange = e => {
    const text = e.target.value;

    if (e.target.id === "body") {
      this.setState(prevState => {
        return {
          ...prevState,
          body: text
        };
      });
    }

    if (e.target.id === "author") {
      this.setState(prevState => {
        return {
          ...prevState,
          author: text
        };
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { author, body } = this.state;
    console.log(this.props);

    const { dispatch, parentId } = this.props;

    dispatch(handleAddComment({ author, body, parentId }));
  };

  render() {
    return (
      <section className="modal-card-body">
        <div className="container" style={{ width: "60%" }}>
          <div className="field">
            <label className="label">Author</label>
            <div className="control has-icons-left has-icons-right">
              <input
                id="author"
                className="input"
                type="text"
                placeholder="Author"
                value={this.state.author}
                onChange={this.handleTextChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">New Comment</label>
            <div className="control">
              <textarea
                id="body"
                className="textarea"
                placeholder="New Comment"
                value={this.state.body}
                onChange={this.handleTextChange}
              />
            </div>
          </div>
          <div className="level" style={{ justifyContent: "space-between" }}>
            <a className="button is-primary" onClick={this.handleSubmit}>
              Save
            </a>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(stateTree, props) {
  const { id } = props.match.params;

  return {
    parentId: id
  };
}

export default connect(mapStateToProps)(NewComment);