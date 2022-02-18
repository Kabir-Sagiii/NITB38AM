import React, { Component } from "react";

class GithubDetails extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-warning text-white">
                <h2>User Details</h2>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">NAME</li>
                  <li className="list-group-item">NAME</li>
                  <li className="list-group-item">NAME</li>
                  <li className="list-group-item">NAME</li>
                  <li className="list-group-item">NAME</li>
                  <li className="list-group-item">NAME</li>
                  <li className="list-group-item">NAME</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GithubDetails;
