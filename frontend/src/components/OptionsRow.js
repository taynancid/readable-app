import React, { Component } from "react";
import { connect } from "react-redux";
import "bulma/css/bulma.css";
import NewPostModal from "./NewPostModal";

class OptionsRow extends Component {
  state = {
    modalState: false
  };

  handleNewClick = e => {
    this.setState(prevState => {
      return {
        ...prevState,
        modalState: true
      };
    });
  };

  handleCloseModal = e => {
    this.setState(prevState => {
      return {
        ...prevState,
        modalState: false
      };
    });
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="level">
            <div className="level-left">ordem</div>
            <div className="level-right">
              <p className="level-item">
                <a className="button is-success" onClick={this.handleNewClick}>
                  New
                </a>
                {this.state.modalState === true && (
                  <NewPostModal closeModal={this.handleCloseModal} />
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect()(OptionsRow);
