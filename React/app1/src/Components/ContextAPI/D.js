import React from "react";
import myContext from "./Context";

class D extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <h2>D Component</h2>
              </div>
              <div className="card-body">
                <myContext.Consumer>
                  {(data) => {
                    return (
                      <div>
                        <p className="display-6">{data.name}</p>
                        <p className="display-6">{data.city}</p>
                      </div>
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

export default D;
