import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <img src={this.props.imgurl} className="img-fluid" />
              </div>
              <div className="card-body">
                <p>{this.props.name}</p>
                <p>{this.props.description}</p>
                <button className="btn btn-outline-primary">
                  Explore More!!!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
