import React, { Component } from "react";
import { connect } from "react-redux";
import "bulma/css/bulma.css";
import NewPostModal from "./NewPostModal";
import DashBoard from "./DashBoard";

class MainPage extends Component {
  state = {
    modalState: false,
    sortType: "timestamp"
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

  handleSort = e => {
    const sortType = e.target.id;
    this.setState(prevState => {
      return {
        ...prevState,
        sortType
      };
    });
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                  <button
                    className="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu4"
                  >
                    <span>Sort By</span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-item">
                      <a id="timestamp" onClick={this.handleSort}>
                        Most recent
                      </a>
                    </div>
                    <div className="dropdown-item">
                      <a id="voteCount" onClick={this.handleSort}>
                        Vote Count
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <button
                  className="button is-success"
                  onClick={this.handleNewClick}
                >
                  New
                </button>
                {this.state.modalState === true && (
                  <NewPostModal closeModal={this.handleCloseModal} />
                )}
              </div>
            </div>
          </div>
          <DashBoard
            sortType={this.state.sortType}
            category={this.props.category}
          />
        </div>
      </section>
    );
  }
}

function mapStateToProps(stateTree, props) {
  const { category } = props.match.params;

  return {
    category
  };
}

export default connect(mapStateToProps)(MainPage);
