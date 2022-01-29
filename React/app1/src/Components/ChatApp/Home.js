import React, { Component } from "react";
import Clinet from "./Clinet";
import Server from "./Server";

class Home extends Component {
  render() {
    return (
      <div className="container mt-5 p-5">
        <div className="row">
          <div className="col bg-dark text-white">
            <h2>Home Component</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <Clinet />
          </div>
          <div className="col-6">
            <Server />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
