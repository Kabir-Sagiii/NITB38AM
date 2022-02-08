import React, { Component } from "react";

class UpdatingPhase extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count === nextState.count) {
      return false;
    }
    console.log("shouldComponentUpdate is called");
    return true;
  }
  componentWillUnmount() {
    alert("ComponentWillunmount");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(" getSnapshotBeforeUpdate is called");
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate is called");
  }
  render() {
    console.log("render is called");
    return (
      <div className="container mt-5 text-center">
        <p className="display-6">Count : {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
          className="btn mt-3 btn-primary"
        >
          Update Count
        </button>
      </div>
    );
  }
}

export default UpdatingPhase;
