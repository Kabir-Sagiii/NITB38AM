import React from "react";
import D from "./D";
import myContext from "./Context";
class C extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-info text-white">
                <h2>C Component</h2>
              </div>
              <div className="card-body">
                <D />
              </div>
              <div className="card-footer">
                <myContext.Consumer>
                  {(mycontextdata) => {
                    return (
                      <p className="lead text-danger">{mycontextdata.name}</p>
                    );
                  }}
                </myContext.Consumer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default C;
