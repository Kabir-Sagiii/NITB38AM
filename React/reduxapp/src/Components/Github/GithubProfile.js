import React, { Component } from "react";
import { connect } from "react-redux";

class GithubProfile extends Component {
  render() {
    const { avatar_url, name, bio } = this.props.userData;
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <img src={avatar_url} className="img-fluid" />
              </div>
              <div className="card-body">
                <h2>{name}</h2>
                <p>{bio || "Lorem ksjdb kjsbdjksdb"}</p>
                <button className="btn btn-danger">Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((storeData) => {
  return {
    userData: storeData.githubReducer.userDetails,
  };
}, null)(GithubProfile);
