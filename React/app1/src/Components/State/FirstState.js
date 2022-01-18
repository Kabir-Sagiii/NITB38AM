import React from "react";

class FirstState extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "Welcome to React World",
      description: "React is Js Library",
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>
      </div>
    );
  }
}

export default FirstState;
