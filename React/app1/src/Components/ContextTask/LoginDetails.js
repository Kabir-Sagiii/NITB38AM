import React, { Component } from "react";
import Table from "./Table";
import userContext from "./UserContext";

class LoginDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: ["UUID", "USERNAME"],
    };
  }

  render() {
    return (
      <div className="container">
        <userContext.Consumer>
          {(contextData) => {
            return contextData.length > 0 ? (
              <Table
                header={this.state.header}
                data={[
                  contextData[0].login.uuid,
                  contextData[0].login.username,
                ]}
              />
            ) : (
              <div></div>
            );
          }}
        </userContext.Consumer>
      </div>
    );
  }
}

export default LoginDetails;
