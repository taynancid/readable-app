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
      <div>
        <div class="hero is-medium is-primary is-bold">
          <div class="hero-body">
            <div class="container has-text-centered is-large">
              <span className="icon is-large">
                <i className="fab fa-forumbee" style={{ fontSize: "30px" }} />
              </span>
              <h1 style={{ fontFamily: "Bungee Inline", fontSize: "75px" }}>
                Readable
              </h1>
            </div>
          </div>
        </div>
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
                  <div
                    className="dropdown-menu"
                    id="dropdown-menu4"
                    role="menu"
                  >
                    <div className="dropdown-content">
                      <div className="dropdown-item">
                        <a id="mostRecent" onClick={this.handleSort}>
                          Most recent
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a id="leastRecent" onClick={this.handleSort}>
                          Least recent
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
                    className="button is-primary"
                    onClick={this.handleNewClick}
                  >
                    New Post
                  </button>
                  {this.state.modalState === true && (
                    <NewPostModal closeModal={this.handleCloseModal} />
                  )}
                </div>
              </div>
            </div>
            <hr />
            <DashBoard
              sortType={this.state.sortType}
              category={this.props.category}
            />
          </div>
        </section>
      </div>
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
