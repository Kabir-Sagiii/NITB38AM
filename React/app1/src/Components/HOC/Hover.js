import React, { Component } from "react";
import hoc from "./HOC";

class Hover extends Component {
  render() {
    return (
      <div className="container">
        <p className="display-6 lead" onMouseOver={this.props.updateCount}>
          Hovered me {this.props.count} times
        </p>
      </div>
    );
  }
}

export default hoc(Hover);
