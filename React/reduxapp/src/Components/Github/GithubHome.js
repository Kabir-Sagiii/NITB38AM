import React, { Component } from "react";
import GithubDetails from "./GithubDetails";
import GithubProfile from "./GithubProfile";
import GithubSearch from "./GithubSearch";

class GithubHome extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <GithubSearch />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <GithubProfile />
          </div>
          <div className="col-8">
            <GithubDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default GithubHome;
