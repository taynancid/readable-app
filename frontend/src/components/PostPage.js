import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";

class PostPage extends Component {
  render() {
    const { id } = this.props;
    return (
      <section className="section">
        <div className="container">
          <Post id={id} />
        </div>
      </section>
    );
  }
}

function mapStateToProps(stateTree, props) {
  const { id } = props.match.params;
  return {
    id
  };
}

export default connect(mapStateToProps)(PostPage);
