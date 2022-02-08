import React, { Component } from "react";

class Mounting extends Component {
  componentDidMount() {
    console.log("ComponentDidMount is called");
  }

  constructor(props) {
    super(props);
    console.log("Constructor is Called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps is Called");
    return null;
  }

  render() {
    console.log("Render is called");
    return (
      <div>
        <h2>Mounting Component</h2>
      </div>
    );
  }
}

export default Mounting;
