import React from "react";
import "bulma/css/bulma.css";
import { connect } from "react-redux";

const NewPostModal = ({ closeModal }) => {
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
              <input className="input" type="text" placeholder="Title" />
            </div>
          </div>

          <div className="field">
            <label className="label">Author</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Author"
                value=""
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Post</label>
            <div className="control">
              <textarea className="textarea" placeholder="New Post" />
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
          <a className="button is-primary" onClick={closeModal}>
            Add
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect()(NewPostModal);
