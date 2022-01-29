import React from "react";
import Address from "./Address";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "NIT",
      city: "chennai",
      email: "NIT@gmail.com",
      state1: "TN",
    };
  }
  updateState = () => {
    this.setState({
      name: "Kabir",
      email: "Kabir@gmail.com",
      city: "Hyd",
      state1: "Ts",
    });
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h2>User Component</h2>
              </div>
              <div className="card-body">
                <p>Name:{this.state.name}</p>
                <p>Email:{this.state.email}</p>
              </div>
              <div className="card-footer">
                {/* <Address data={this.state} /> */}
                <Address city={this.state.city} state={this.state.state1} />
                <button
                  className="btn btn-outline-primary mt-3"
                  onClick={this.updateState}
                >
                  Update Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default User;
