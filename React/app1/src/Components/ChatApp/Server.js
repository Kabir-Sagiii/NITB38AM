import React, { Component } from "react";
import { connect } from "react-redux";

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
                <h4>{this.props.storeData}</h4>
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
    storeData: storeData.myReducer.client,
  };
}, null)(Server);
