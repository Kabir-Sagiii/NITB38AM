import React, { Component } from "react";
import Counter from "./Counter";
import Hover from "./Hover";

class HOCHome extends Component {
  render() {
    return (
      <div className="container text-center mt-5">
        <div className="row">
          <Counter />
        </div>

        <div className="row mt-5">
          <Hover />
        </div>
      </div>
    );
  }
}

export default HOCHome;
