import React, { Component } from "react";

class Server extends Component {
  render() {
    return (
      <div className="container mt-3 p-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-success text-white">
                <h2>Server Component</h2>
              </div>
              <div className="card-body">
                <input
                  type="text"
                  placeholder="Enter Msg"
                  className="form-control"
                />
                <button className="btn btn-success mt-3 px-3">Send</button>
              </div>
              <div className="card-footer">
                <h4>Client Data</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Server;
