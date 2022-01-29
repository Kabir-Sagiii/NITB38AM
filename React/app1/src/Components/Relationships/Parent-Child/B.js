import React from "react";
import A from "./A";
import C from "./C";

class B extends React.Component {
  render() {
    return (
      <div>
        <h2>B Component</h2>
        <A />
        <C />
      </div>
    );
  }
}

export default B;
