import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import Comment from "./Comment";
import NewComment from "./NewComment";
import { handleGetComments } from "../actions/comments";

class PostPage extends Component {
  componentDidMount() {
    console.log("show");
    this.props.dispatch(handleGetComments(this.props.id));
  }

  render() {
    const { id, commentsId } = this.props;
    return (
      <Fragment>
        <section className="section">
          <div className="container" style={{ justifyContent: "center" }}>
            <Post id={id} />
          </div>
        </section>
        <div className="level">
          <div className="level-item">
            <strong className="subtitle has-text-success">{`${
              commentsId.length
            } Comments`}</strong>
          </div>
        </div>
        {commentsId && commentsId.map(id => <Comment id={id} key={id} />)}
        <NewComment {...this.props} />
      </Fragment>
    );
  }
}

function mapStateToProps({ comments }, props) {
  const { id } = props.match.params;
  return {
    id,
    commentsId: Object.keys(comments)
      .filter(id => comments[id].deleted === false)
      .sort((a, b) => {
        return comments[b].timestamp - comments[a].timestamp;
      })
  };
}

export default connect(mapStateToProps)(PostPage);
