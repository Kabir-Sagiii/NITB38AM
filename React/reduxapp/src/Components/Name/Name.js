import React, { Component } from "react";
import { connect } from "react-redux";

class Name extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <p className="display-6">{this.props.storeData}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((storeData) => {
  return {
    storeData: storeData.nameReducer.user,
  };
}, null)(Name);
