import React, { Component } from "react";
import Name from "../Name/Name";
import nameAction from "../../Actions/NameAction";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  sendDataToAction = () => {
    nameAction(this.state.name);
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="card">
              <div className="card-header">
                <input
                  type="text"
                  onChange={(e) => {
                    this.setState({
                      name: e.target.value,
                    });
                  }}
                />
                <button onClick={this.sendDataToAction}>Send</button>
              </div>
              <div className="card-body">
                <Name />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
