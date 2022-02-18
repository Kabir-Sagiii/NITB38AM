import React, { Component } from "react";
import axios from "axios";
import githubAction from "../../Actions/GithubAction";

class GithubSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }
  getUserData = () => {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        console.log(res.data);
        githubAction(res.data);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="card">
                <div className="card-header bg-danger text-white">
                  <h2>Github Search</h2>
                </div>
                <div className="card-body d-flex">
                  <div>
                    <input
                      onChange={(e) => {
                        this.setState({
                          username: e.target.value,
                        });
                      }}
                      size="70"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <button
                    className="btn btn-primary mx-3 px-5"
                    onClick={this.getUserData}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GithubSearch;
