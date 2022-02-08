import React, { Component } from "react";
import Table from "./Table";
import userContext from "./UserContext";

class AddressDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: ["CITY", "STATE", "POSTCODE"],
    };
  }

  render() {
    return (
      <div className="container">
        <userContext.Consumer>
          {(contextData) => {
            console.log(contextData);
            return contextData.length > 0 ? (
              <Table
                header={this.state.header}
                data={[
                  contextData[0].location.city,
                  contextData[0].location.state,
                  contextData[0].location.postcode,
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

export default AddressDetails;
