import React, { Component } from "react";
import { connect } from "react-redux";

class NewComment extends Component {
  state = {
    newBody: ""
  };

  handleTextChange = e => {
    const body = e.target.value;

    this.setState(prevState => {
      return {
        ...prevState,
        newBody: body
      };
    });
  };

  handleOnSubmit = e => {};

  render() {
    return (
      <section className="modal-card-body">
        <div className="field">
          <label className="label">New Comment</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="New Comment"
              value={this.state.newBody}
              onChange={this.handleTextChange}
            />
          </div>
        </div>
        <div className="level" style={{ justifyContent: "space-between" }}>
          <a className="button is-primary" onClick={this.handleSubmit}>
            Save
          </a>
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

export default connect()(NewComment);
