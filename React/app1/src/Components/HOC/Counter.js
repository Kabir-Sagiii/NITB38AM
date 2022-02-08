import React, { Component } from "react";
import hoc from "./HOC";

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <p className="display-6">Clicked me {this.props.count} times</p>
        <button className="btn btn-primary" onClick={this.props.updateCount}>
          Update Count
        </button>
      </div>
    );
  }
}

export default hoc(Counter);
