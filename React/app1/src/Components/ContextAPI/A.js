import React from "react";
import B from "./B";
import myContext from "./Context";

class A extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "NIT",
      city: "HYD",
    };
  }
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h2>A Component</h2>
              </div>
              <div className="card-body">
                <myContext.Provider value={this.state}>
                  <B />
                </myContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default A;
