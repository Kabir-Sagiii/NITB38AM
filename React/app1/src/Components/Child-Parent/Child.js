import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Naresh IT",
      city: "Hyderabad",
    };
  }

  sendData = () => {
    this.props.updateParentState(this.state.name, this.state.city);
  };

  render() {
    return (
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2>Child Component</h2>
        </div>

        <div className="card-body">
          <button className="btn btn-primary" onClick={this.sendData}>
            Send Data to Parent
          </button>
        </div>
      </div>
    );
  }
}
export default Child;
